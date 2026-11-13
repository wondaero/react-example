import "@/App.css";
import Header from "@/components/Header";
import LinkButton from "@/components/LinkButton";
import Toast from "@/components/Toast";
import { Outlet } from "react-router";
import {
  useState,
  useMemo,
  useReducer,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import type { Daily, DailyFilter } from "@/types/daily";
import {
  DailyContext,
  DailyActionsContext,
  DailyFilterContext,
  DailyToastContext,
} from "@/contexts/DailyContext";

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
  try {
    const saved = window.localStorage.getItem("daily");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

function DailyPage() {
  const [daily, dispatch] = useReducer(reducer, null, loadData);

  const actions = useMemo(
    () => ({
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
    }),
    [],
  );

  useEffect(() => {
    window.localStorage.setItem("daily", JSON.stringify(daily));
  }, [daily]);

  const [filter, setFilter] = useState<DailyFilter>(() => ({
    weather: 0,
    month: Date.now(),
  }));
  const filterValue = useMemo(() => ({ filter, setFilter }), [filter]);

  const [toast, setToast] = useState<{ id: number; message: ReactNode } | null>(
    null,
  );
  const showToast = useCallback((message: ReactNode) => {
    setToast({ id: Date.now(), message });
  }, []);

  const toastValue = useMemo(() => ({ showToast }), [showToast]);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 2500);
    return () => clearTimeout(timer);
  }, [toast]);
  return (
    <>
      <Header title="dAILY" left={homeLink}></Header>
      <DailyFilterContext value={filterValue}>
        <DailyContext value={daily}>
          <DailyActionsContext value={actions}>
            <DailyToastContext value={toastValue}>
              <Outlet />
              {toast && <Toast key={toast.id}>{toast.message}</Toast>}
            </DailyToastContext>
          </DailyActionsContext>
        </DailyContext>
      </DailyFilterContext>
    </>
  );
}

export default DailyPage;
