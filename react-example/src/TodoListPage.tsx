import "./App.css";
import Header from "./components/Header";
import TodoAddForm from "./components/todolist/TodoAddForm";
import TodoSearch from "./components/todolist/TodoSearch";
import TodoList from "./components/todolist/TodoList";

const todoListData = [
  { id: 1, title: "안녕", completed: false, date: "" },
  { id: 2, title: "안녕2", completed: false, date: "" },
  { id: 3, title: "안녕3", completed: false, date: "" },
];

function TodoListPage() {
  return (
    <>
      <Header title="tODOLIST"></Header>
      <TodoAddForm></TodoAddForm>
      <div>
        <TodoSearch></TodoSearch>
        <TodoList data={todoListData}></TodoList>
        <div>리스트부</div>
      </div>
      <div>페이지네이션</div>
    </>
  );
}

export default TodoListPage;
