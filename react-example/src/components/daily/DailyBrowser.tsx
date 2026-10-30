import DailyToolBar from "./DailyToolBar";
import DailyList from "./DailyList";
import { useState, useContext } from "react";
import { TodoContext } from "../../TodoListPage";

function DailyBrowser() {
  const [keyword, setKeyword] = useState<string>("");
  console.log("데일리브라우저");

  return (
    <section className="flex flex-col items-center gap-4 max-w-200 w-full px-2">
      <DailyToolBar onChange={setKeyword}></DailyToolBar>
      <DailyList keyword={keyword}></DailyList>
    </section>
  );
}

export default DailyBrowser;
