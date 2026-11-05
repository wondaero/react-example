import "@/App.css";
import Header from "@/components/Header";
import Button from "@/components/Button";
import LinkButton from "@/components/LinkButton";

import { Outlet } from "react-router";

import { useState, createContext, useMemo, useReducer } from "react";

import DailyBrowser from "@/components/daily/DailyBrowser";

import type { Daily, Actions } from "@/types/daily";

const initDaily = [
  {
    id: crypto.randomUUID(),
    weather: 1,
    date: Date.now(),
    title: "테스트 일기1",
    content: "테스트 일기입니다1.",
  },
  {
    id: crypto.randomUUID(),
    weather: 2,
    date: Date.now(),
    title: "테스트 일기2",
    content: "테스트 일기입니다2.",
  },
  {
    id: crypto.randomUUID(),
    weather: 3,
    date: Date.now(),
    title: "테스트 일기3",
    content: "테스트 일기입니다3.",
  },
  {
    id: crypto.randomUUID(),
    weather: 4,
    date: Date.now(),
    title: "테스트 일기4",
    content: "테스트 일기입니다4.",
  },
];

const homeLink = <LinkButton to="/">홈</LinkButton>;
const todayBtn = <Button>오늘</Button>;

export const DailyContext = createContext<Daily[]>([]);
export const DailyActionsContext = createContext<Actions[]>([]);

function reducer(state, action) {
  switch (action.type) {
    case "create":
      return [action.data, ...state];
    case "remove":
      return [action.data, ...state];
    case "update":
      return [action.data, ...state];
  }
}

function DailyPage() {
  const [daily, dispatch] = useReducer(reducer, initDaily);
  const [orgDailyList, setOrgDailyList] = useState<Daily[]>(initDaily);

  const onDelete = (data) => {};
  const onUpdate = () => {};

  const actions = {
    onCreate: (data: Daily) => {
      dispatch({
        type: "create",
        data: {
          id: crypto.randomUUID(),
          weather: 1,
          title: "추가일기",
          content: "추가 일기입니다1",
          date: Date.now(),
        },
      });
    },
  };

  return (
    <>
      <Header title="dAILY" left={homeLink} right={todayBtn}></Header>
      <DailyContext value={daily}>
        <DailyActionsContext value={actions}>
          <Outlet />
        </DailyActionsContext>
      </DailyContext>
    </>
  );
}

export default DailyPage;
