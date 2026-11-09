import "@/App.css";
import Header from "@/components/Header";
import LinkButton from "@/components/LinkButton";
import { Outlet } from "react-router";
import {
  useState,
  useMemo,
  useReducer,
  useEffect
} from "react";
import type { Daily, DailyFilter } from "@/types/daily";
import {
  DailyContext,
  DailyActionsContext,
  DailyFilterContext,
} from "@/contexts/DailyContext";

// const initDaily = [
//   {
//     id: crypto.randomUUID(),
//     weather: 1,
//     date: new Date("2026-11-04").getTime(),
//     title: "테스트 일기1",
//     content: "테스트 일기입니다1.",
//   },
//   {
//     id: crypto.randomUUID(),
//     weather: 2,
//     date: new Date("2026-11-04").getTime(),
//     title: "테스트 일기2",
//     content: "테스트 일기입니다2.",
//   },
//   {
//     id: crypto.randomUUID(),
//     weather: 3,
//     date: new Date("2026-10-04").getTime(),
//     title: "테스트 일기3",
//     content: "테스트 일기입니다3.",
//   },
//   {
//     id: crypto.randomUUID(),
//     weather: 4,
//     date: new Date("2026-09-04").getTime(),
//     title: "테스트 일기4",
//     content: "테스트 일기입니다4.",
//   },
// ];

// window.localStorage.setItem('daily', JSON.stringify(initDaily));

const homeLink = <LinkButton to="/">홈</LinkButton>;

type DailyAction =
  | { type: "create"; data: Daily }
  | { type: "update"; data: Daily }
  | { type: "delete"; data: string };

function reducer(state: Daily[], action: DailyAction): Daily[] {
  switch (action.type) {
    case "create":
      return [action.data, ...state];
    case "delete":
      return state.filter((old: Daily) => old.id !== action.data);
    case "update":
      return state.map((old: Daily) =>
        old.id === action.data.id ? action.data : old,
      );
  }
}

const loadData = (): Daily[] => {
  try{
    const saved = window.localStorage.getItem('daily');
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function DailyPage() {
  
  const [daily, dispatch] = useReducer(reducer, null, loadData);

  const actions = {
    onCreate: (data: Daily) => {
      dispatch({
        type: "create",
        data: data,
      });
    },
    onUpdate: (data: Daily) => {
      dispatch({
        type: "update",
        data: data,
      });
    },
    onDelete: (delId: string) => {
      dispatch({
        type: "delete",
        data: delId,
      });
    },
  };

  useEffect(() => {
    console.log('데이터 변동 발생!!!')
    window.localStorage.setItem('daily', JSON.stringify(daily));
  }, [daily])

  const [filter, setFilter] = useState<DailyFilter>({
    weather: 0,
    month: Date.now(),
  });
  const filterValue = useMemo(() => ({ filter, setFilter }), [filter]);

  return (
    <>
      <Header title="dAILY" left={homeLink}></Header>
      <DailyFilterContext value={filterValue}>
        <DailyContext value={daily}>
          <DailyActionsContext value={actions}>
            <Outlet />
          </DailyActionsContext>
        </DailyContext>
      </DailyFilterContext>
    </>
  );
}

export default DailyPage;
