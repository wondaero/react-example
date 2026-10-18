import TodoSearch from './TodoSearch'
import TodoList from './TodoList'
import { TodoContext } from '../../TodoListPage'
import { useState } from 'react'


function TodoBrowser() {
  const [keyword, setKeyword] = useState<string>('');

  return (
    <section className="flex flex-col items-center gap-4 max-w-100 w-full">
      <TodoSearch onChange={e => setKeyword(e.target.value)}></TodoSearch>
      <TodoList keyword={keyword}></TodoList>
    </section>
  );
}

export default TodoBrowser;
