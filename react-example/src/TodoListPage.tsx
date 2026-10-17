import "./App.css";
import { useState, createContext } from 'react';
import Header from "./components/Header";
import TodoAddForm from "./components/todolist/TodoAddForm";
import TodoSearch from "./components/todolist/TodoSearch";
import TodoList from "./components/todolist/TodoList";

import type { Todo, Actions } from './types/todo'

const initTodo = [
  { id: crypto.randomUUID(), title: "안녕", completed: false, date: Date.now() },
  { id: crypto.randomUUID(), title: "안녕2", completed: false, date: Date.now() },
  { id: crypto.randomUUID(), title: "안녕3", completed: false, date: Date.now() },
]
function TodoListPage() {
  
  const TodoContext = createContext<Todo[]>([]);
  const TodoActionsContext = createContext<Actions | null>(null);

  const [todoList, setTodoList] = useState<Todo[]>(initTodo);

  const deleteTodo = (id: string) => {
    setTodoList(prev => prev.filter(t => t.id !== id));
  }
  const addTodo = (title: string) => {
    setTodoList(prev => [{id: crypto.randomUUID(), title: title, completed: false, date: Date.now()}, ...prev]);
  }
  const toggleTodo = (id: string) => {
    setTodoList(prev => prev.map(t => t.id === id ? {...t, completed: !t.completed} : t));
  }

  return (
    <>
      <Header title="tODOLIST"></Header>
      <div className="flex flex-col gap-4 items-center">
        <TodoAddForm></TodoAddForm>
        <div className="flex flex-col items-center gap-4 max-w-100 w-full">
          <TodoSearch></TodoSearch>
          <TodoList data={todoList}></TodoList>
          <div>리스트부</div>
        </div>
        <div>페이지네이션</div>
      </div>
    </>
  );
}

export default TodoListPage;
