import './App.css'
import Header from "./components/Header";
import Button from "./components/Button";
import LinkButton from "./components/LinkButton";

const homeLink = <LinkButton to="/">홈</LinkButton>;

function DailyPage() {
  return (
    <>
      <Header title="dAILY" left={homeLink}></Header>
      <section className="flex items-center justify-between p-4">
        <Button>이전</Button>
        <h3>{}</h3>
        <Button>다음</Button>
      </section>
    </>
  )
}

export default DailyPage;
