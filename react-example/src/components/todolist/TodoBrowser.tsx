import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import { useState } from "react";
import { useDebouncedValue } from "../../hooks/useDebouncedValue";

function TodoBrowser() {
  const [keyword, setKeyword] = useState<string>("");
  const debouncedKeyword = useDebouncedValue(keyword, 500);

  return (
    <section className="flex flex-col items-center gap-4 max-w-100 w-full">
      <TodoSearch onChange={(e) => setKeyword(e.target.value)}></TodoSearch>
      <TodoList keyword={debouncedKeyword}></TodoList>
    </section>
  );
}

export default TodoBrowser;
