import { useState, useCallback } from "react";
import "./App.css";
import Header from "./components/Header";
import LinkButton from "./components/LinkButton";
import CounterViewer from "./components/counter/CounterViewer";
import CounterController from "./components/counter/CounterController";

const homeLink = <LinkButton to="/">홈</LinkButton>;

function CounterPage() {
  const [countState, setCountState] = useState({
    num: 0,
    last: "0",
  });

  const handleStep = useCallback((num: number, val: string) => {
    setCountState((old) => ({
      num: num === 0 ? num : old.num + num,
      last: val,
    }));
  }, []);

  return (
    <>
      <Header title="cOUNTER" left={homeLink}></Header>
      <CounterViewer
        num={countState.num}
        last={countState.last}
      ></CounterViewer>
      <CounterController handler={handleStep}></CounterController>
    </>
  );
}

export default CounterPage;
