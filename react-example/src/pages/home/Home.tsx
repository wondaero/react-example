import "./App.css";
import Header from "./components/Header";
import LinkButton from "./components/LinkButton";
import styles from "./components/Button.module.css";

function Home() {
  return (
    <main className="flex flex-col items-center h-[100vh]">
      <Header title="rEACTeXAMPLE"></Header>
      <div className="flex flex-col gap-3">
        <LinkButton className={styles.btn} to="/count">
          카운터
        </LinkButton>
        <LinkButton className={styles.btn} to="/todolist">
          투두리스트
        </LinkButton>
        <LinkButton className={styles.btn} to="/daily">
          일기
        </LinkButton>
      </div>
    </main>
  );
}

export default Home;
