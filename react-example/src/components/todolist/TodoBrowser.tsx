import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import { useState } from "react";
import { useDebouncedValue } from "../../hooks/useDebouncedValue";

function TodoBrowser() {
  const [keyword, setKeyword] = useState<string>("");
  const debouncedKeyword = useDebouncedValue(keyword, 300);
  console.log("투두브라우저");

  return (
    <section className="flex flex-col items-center gap-4 max-w-200 w-full px-2">
      <TodoSearch onChange={(e) => setKeyword(e.target.value)}></TodoSearch>
      <TodoList keyword={debouncedKeyword}></TodoList>
    </section>
  );
}

export default TodoBrowser;
