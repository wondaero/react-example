import "./App.css";
import Home from "./pages/home/Home";
import CounterPage from "./pages/counter/CounterPage";
import TodoListPage from "./pages/todolist/TodoListPage";

import DailyPage from "./pages/daily/DailyPage";
import DailyListPage from "./pages/daily/DailyListPage";
import DailyItemPage from "./pages/daily//DailyItemPage";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/todolist" element={<TodoListPage />}></Route>
        <Route path="/count" element={<CounterPage />}></Route>
        <Route path="/daily" element={<DailyPage />}>
          <Route index element={<DailyListPage />} />
          <Route path="new" element={<DailyItemPage />} />
          <Route path=":id" element={<DailyItemPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
