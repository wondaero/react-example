import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import LinkButton from "./components/LinkButton";

import DailyBrowser from "./components/daily/DailyBrowser";

const homeLink = <LinkButton to="/">홈</LinkButton>;

function DailyPage() {
  console.log(3333);
  return (
    <>
      <Header title="dAILY" left={homeLink}></Header>
      <section className="flex items-center justify-between p-4">
        <Button>이전</Button>
        <Button>이전</Button>
        <h3>{}</h3>
        <Button>다음</Button>
        <Button>다음</Button>
      </section>
      <DailyBrowser></DailyBrowser>
    </>
  );
}

export default DailyPage;
