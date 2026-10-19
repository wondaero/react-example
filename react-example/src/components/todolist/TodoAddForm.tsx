import Button from "../Button";
import Input from "../Input";
import { useState, useContext, useRef } from "react";
import { TodoActionsContext } from "../../TodoListPage";

function TodoAddForm() {
  const TodoActions = useContext(TodoActionsContext);
  const [todoTitle, setTodoTitle] = useState<string>("");
  const addInput = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    TodoActions.addTodo(todoTitle);
    setTodoTitle("");
    addInput.current?.focus();
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodo();
      }}
      className="flex items-center gap-2 justify-center"
    >
      <Input
        type="text"
        onChange={(e) => setTodoTitle(e.target.value)}
        value={todoTitle}
        ref={addInput}
      />
      <Button type="submit">추가</Button>
    </form>
  );
}

export default TodoAddForm;
