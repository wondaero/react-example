import Button from "../Button";
import Checkbox from "../Checkbox";

import { useContext, useRef } from "react";
import type { Todo } from "../../types/todo";
import { TodoContext, TodoActionsContext } from "../../TodoListPage";

import styles from "./TodoList.module.css";

function TodoItem({ data }: { data: Todo }) {
  const TodoActions = useContext(TodoActionsContext);
  const todoItem = useRef<HTMLLIElement>(null);

  const delEffect = (id) => {
    if (!window.confirm("삭제할까요?")) return;
    todoItem.current.classList.add(styles.deleting);

    todoItem.current.ontransitionend = (e) => {
      if (e.target !== e.currentTarget) return;
      if (e.propertyName !== "opacity") return;
      TodoActions.deleteTodo(id);
    };
  };
  return (
    <li ref={todoItem} className="flex items-center gap-2">
      <Checkbox
        title={data.title}
        checked={data.completed}
        className="flex-1"
        onChange={() => {
          TodoActions.toggleTodo(data.id);
        }}
        effect={true}
      ></Checkbox>
      <Button
        onClick={() => {
          delEffect(data.id);
        }}
        className="bg-[red] text-[#fff]"
      >
        삭제
      </Button>
    </li>
  );
}

const normalize = (s: string) => s.replace(/\s/g, "").toLowerCase();

function TodoList({ keyword }: { keyword?: string }) {
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
