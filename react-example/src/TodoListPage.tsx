import "./App.css";
import { useState, createContext, useMemo } from 'react';
import Header from "./components/Header";
import TodoAddForm from "./components/todolist/TodoAddForm";
import TodoBrowser from "./components/todolist/TodoBrowser";

import type { Todo, Actions } from './types/todo'

const initTodo = [
  { id: crypto.randomUUID(), title: "물마시기", completed: true, date: Date.now() },
  { id: crypto.randomUUID(), title: "은행방문", completed: false, date: Date.now() },
  { id: crypto.randomUUID(), title: "친구에게 전화", completed: false, date: Date.now() },
]
export const TodoContext = createContext<Todo[]>([]);
export const TodoActionsContext = createContext<Actions | null>(null);

function TodoListPage() {
  const [todoList, setTodoList] = useState<Todo[]>(initTodo);

  const actions = useMemo<Actions>(() => ({
    deleteTodo: (id: string) => {
      setTodoList(prev => prev.filter(t => t.id !== id));
    },
    addTodo: (title: string) => {
      setTodoList(prev => [{id: crypto.randomUUID(), title: title, completed: false, date: Date.now()}, ...prev]);
    },
    toggleTodo:(id: string) => {
      setTodoList(prev => prev.map(t => t.id === id ? {...t, completed: !t.completed} : t));
    }
  }), [])

  return (
    <main className="flex flex-col items-center h-[100vh]">
      <Header title="tODOLIST"></Header>
      <TodoContext value={todoList}>
        <TodoActionsContext value={actions}>
          <div className="flex-1 flex flex-col gap-4 items-center">
            <TodoAddForm></TodoAddForm>
            <TodoBrowser></TodoBrowser>
          </div>
        </TodoActionsContext>
      </TodoContext>
    </main>
  );
}

export default TodoListPage;
