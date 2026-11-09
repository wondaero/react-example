import Button from "@/components/Button";
import Input from "@/components/Input";
import { useState, useRef } from "react";
import useContextCheck from "@/hooks/useContextCheck";
import { TodoActionsContext } from "@/pages/todolist/TodoListPage";

function TodoAddForm() {
  const TodoActions = useContextCheck(TodoActionsContext);
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
