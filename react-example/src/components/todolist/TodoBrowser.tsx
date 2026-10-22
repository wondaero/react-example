import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import { useState } from "react";

function TodoBrowser() {
  const [keyword, setKeyword] = useState<string>("");
  console.log("투두브라우저");

  return (
    <section className="flex flex-col items-center gap-4 max-w-200 w-full px-2">
      <TodoSearch onChange={(e) => setKeyword(e.target.value)}></TodoSearch>
      <TodoList></TodoList>
    </section>
  );
}

export default TodoBrowser;
