import Button from "../Button";
import Toggle from "../Toggle";
import { memo, type CSSProperties } from "react";

import { useState, type ChangeEventHandler, type ChangeEvent } from "react";
import { useDebounceCallback } from "@/hooks/useDebounced";
import { getWeather } from "@/components/Weather";
import WeatherIcon from "@/components/WeatherIcon";

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

  const toggleData = [1,2,3,4].map(n => ({
    title: <WeatherIcon
      type={n}
      height={20}
      className="inline-block align-center"
    ></WeatherIcon>,
    callback: () => {}
  }));

  return (
    <section className="flex items-center justify-between w-full">
      <div>
        <Toggle className="border-1 w-12 text-center" data={toggleData} style={{ "--btn-bg": "#fff" } as CSSProperties}></Toggle>
      </div>
      <Button>추가</Button>
    </section>
  );
}

export default memo(DailyToolBar);
