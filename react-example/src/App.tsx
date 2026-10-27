import "./App.css";
import Home from "./Home";
import CounterPage from "./CounterPage";
import TodoListPage from "./TodoListPage";
import DailyPage from "./DailyPage";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/todolist" element={<TodoListPage />}></Route>
        <Route path="/count" element={<CounterPage />}></Route>
        <Route path="/daily" element={<DailyPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
