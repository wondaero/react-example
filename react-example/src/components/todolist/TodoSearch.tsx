import Input from "../Input";
import styles from "./TodoSearch.module.css";

import type { ChangeEventHandler } from "react";

function TodoSearch({
  onChange,
}: {
  onChange?: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <section className="w-full">
      <Input
        className={`${styles.inputSearch} w-full`}
        type="text"
        labelPosition="top"
        placeholder="검색어를 입력해주세요."
        onChange={onChange}
        labelClass="w-full"
      />
    </section>
  );
}

export default TodoSearch;
