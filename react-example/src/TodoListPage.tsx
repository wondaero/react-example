import "./App.css";
import Header from "./components/Header";
import TodoToolbar from "./components/todolist/TodoToolbar";

function TodoListPage() {
  return (
    <>
      <Header title="tODOLIST"></Header>
      <TodoToolbar></TodoToolbar>
      <div>리스트부</div>
      <div>페이지네이션</div>
    </>
  );
}

export default TodoListPage;
