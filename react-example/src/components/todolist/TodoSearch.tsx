import Input from "../Input";
import styles from "./TodoSearch.module.css";
import { memo } from 'react';

import { useState, type ChangeEventHandler, type ChangeEvent } from "react";
import { useDebounceCallback } from "../../hooks/useDebounced";

function TodoSearch({
  onChange,
}: {
  // onChange?: ChangeEventHandler<HTMLInputElement>;
  onChange?: (keyword: string) => void;
}) {
  console.log("투두서치");

  const [keyword, setKeyword] = useState<string>("");

  useDebounceCallback(
    keyword,
    () => {
      onChange?.(keyword);
    },
    1000,
  );

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

export default memo(TodoSearch);
