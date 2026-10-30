import Button from "../Button";
import Checkbox from "../Checkbox";

import { useContext, useRef, memo, type CSSProperties } from "react";
import type { Todo } from "../../types/todo";
import { TodoContext, TodoActionsContext } from "../../TodoListPage";

import styles from "./TodoList.module.css";

const dateParse = (d: string | number) => {
  return new Date(d).toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

const TodoItem = memo(function ({ data }: { data: Todo }) {
  const TodoActions = useContext(TodoActionsContext);
  const todoItem = useRef<HTMLLIElement>(null);

  const delEffect = (id: string) => {
    if (!window.confirm("삭제할까요?")) return;
    const el = todoItem.current;
    if (!el) return;
    el.classList.add(styles.deleting);

    el.ontransitionend = (e) => {
      if (e.target !== e.currentTarget) return;
      if (e.propertyName !== "opacity") return;
      TodoActions.deleteTodo(id);
    };
  };

  return (
    <li ref={todoItem} className="flex items-center gap-2 justify-between">
      <div className="flex items-center">
        <Checkbox
          title={`${data.title}`}
          checked={data.completed}
          className="flex-1"
          onChange={() => {
            TodoActions.toggleTodo(data.id);
          }}
          effect={true}
        ></Checkbox>
        <span className="text-[gray] text-xs ml-1">
          [{dateParse(data.date)}]
        </span>
      </div>
      <Button
        onClick={() => {
          delEffect(data.id);
        }}
        className="text-[#fff]"
        style={{ "--btn-bg": "red" } as CSSProperties}
      >
        삭제
      </Button>
    </li>
  );
});

const normalize = (s: string) => s.replace(/\s/g, "").toLowerCase();

function TodoList({ keyword = "" }: { keyword?: string }) {
  console.log("투두리스트");
  const TodoList = useContext(TodoContext);
  const filteredData = TodoList.filter((t) =>
    normalize(t.title).includes(normalize(keyword)),
  );

  return filteredData && filteredData.length ? (
    <ul className="flex flex-col gap-2 w-full">
      {filteredData.map((item) => (
        <TodoItem key={item.id} data={item}></TodoItem>
      ))}
    </ul>
  ) : (
    <h2>
      데이터가 없습니다.
      <br />
      데이터를 추가해보세요.
    </h2>
  );
}

export default TodoList;
