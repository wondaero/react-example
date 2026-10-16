import Input from "../Input";
import styles from "./TodoSearch.module.css";

import type { ChangeEventHandler } from "react";

function TodoAddForm({
  onChange,
}: {
  onChange?: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <section>
      <Input
        className={styles.inputSearch}
        type="text"
        labelPosition="top"
        placeholder="검색어를 입력해주세요."
        onChange={onChange}
      />
    </section>
  );
}

export default TodoAddForm;
