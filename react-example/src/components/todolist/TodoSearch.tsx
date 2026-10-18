import Input from "../Input";
import styles from "./TodoSearch.module.css";

import type { ChangeEventHandler } from "react";

let timeout: string | null = null;
function TodoSearch({
  onChange,
}: {
  onChange?: ChangeEventHandler<HTMLInputElement>;
}) {
  const setKeyword = (e) => {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => {
      onChange(e);
    }, 500);
  }
  
  return (
    <section className="w-full">
      <Input
        className={`${styles.inputSearch} w-full`}
        type="text"
        labelPosition="top"
        placeholder="검색어를 입력해주세요."
        onChange={setKeyword}
        labelClass="w-full"
      />
    </section>
  );
}

export default TodoSearch;
