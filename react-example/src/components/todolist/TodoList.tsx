// import Input from "../Input";
// import styles from "./TodoSearch.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";

import type { ChangeEventHandler } from "react";

function TodoItem(data: any) {
  return (
    <li>
      {data.title}
      <Checkbox title={data.title} checked={data.completed}></Checkbox>
      <Button>삭제</Button>
    </li>
  );
}

function TodoAddForm({ data }: { data?: any }) {
  return (
    <ul>
      {data.map((item) => (
        <TodoItem key={item.id} data={item}></TodoItem>
      ))}
    </ul>
  );
}

export default TodoAddForm;
