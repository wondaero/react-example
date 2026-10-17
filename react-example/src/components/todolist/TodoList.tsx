// import Input from "../Input";
// import styles from "./TodoSearch.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";

import type { ChangeEventHandler } from "react";
import type { Todo } from '../../types/todo'


function TodoItem({data}: {data: Todo}) {
  return (
    <li className="flex items-center">
      <Checkbox title={data.title} checked={data.completed} className="flex-1"></Checkbox>
      <Button>삭제</Button>
    </li>
  );
}

function TodoAddForm({ data }: { data?: Todo[] }) {
  return (
    data ? (
    <ul className="flex flex-col gap-2 w-full">
      {data.map((item) => (
        <TodoItem key={item.id} data={item}></TodoItem>
      ))}
    </ul>
    ) : (
      <h2>데이터가 없습니다. 데이터를 추가해보세요.</h2>
    )
  );
}

export default TodoAddForm;
