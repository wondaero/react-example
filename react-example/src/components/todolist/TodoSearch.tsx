import Input from "../Input";
import styles from "./TodoSearch.module.css";

import { useState, type ChangeEventHandler, type ChangeEvent } from "react";
import { useDebouncedValue, useDebounce } from "../../hooks/useDebouncedValue";

function TodoSearch({
  onChange,
}: {
  onChange?: ChangeEventHandler<HTMLInputElement>;
}) {
  console.log("투두서치");

  useDebounce(() => {
    console.log("안녕");
  }, 1000);

  const [keyword, setKeyword] = useState<string>("");

  const handleKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <section className="w-full">
      <Input
        className={`${styles.inputSearch} w-full`}
        type="text"
        labelPosition="top"
        placeholder="검색어를 입력해주세요."
        // onChange={onChange}
        onChange={handleKeyword}
        labelClass="w-full"
      />
    </section>
  );
}

export default TodoSearch;
