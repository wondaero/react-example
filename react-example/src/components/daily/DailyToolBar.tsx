import Button from "../Button";
import Toggle from "../Toggle";
import { memo } from "react";

import { useState, type ChangeEventHandler, type ChangeEvent } from "react";
import { useDebounceCallback } from "../../hooks/useDebounced";

function DailyToolBar({
  onChange,
}: {
  // onChange?: ChangeEventHandler<HTMLInputElement>;
  onChange?: (keyword: string) => void;
}) {
  console.log("데일리툴바");

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

  const toggleData = [{ title: "맑음" }, { title: "흐림" }, { title: "비" }];

  return (
    <section className="flex items-center justify-between w-full">
      <div>
        <Toggle className="mr-4" data={toggleData}></Toggle>
        {/* <Select></Select> */}
      </div>
      <Button>추가</Button>
    </section>
  );
}

export default memo(DailyToolBar);
