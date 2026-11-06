import LinkButton from "@/components/LinkButton";
import Toggle from "@/components/Toggle";
import { memo, type CSSProperties } from "react";

import {
  useState,
  useContext,
  type ChangeEventHandler,
  type ChangeEvent,
} from "react";
import { useDebounceCallback } from "@/hooks/useDebounced";
import { getWeather } from "@/components/Weather";
import WeatherIcon from "@/components/WeatherIcon";
import { DailyActionsContext, DailyFilterContext } from "@/pages/daily/DailyPage";
import type { WeatherFilter } from '@/types/daily'

function DailyToolBar({
  onChange,
}: {
  // onChange?: ChangeEventHandler<HTMLInputElement>;
  onChange?: (keyword: string) => void;
}) {
  console.log("데일리툴바");
  const DailyFilter = useContext(DailyFilterContext);

  const [keyword, setKeyword] = useState<string>("");

  const dailyAction = useContext(DailyActionsContext);

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

  const weathers: WeatherFilter[] = [0, 1, 2, 3, 4];
  const toggleData = weathers.map((n) => ({
    title: n === 0 ? (
      <span className="text-xs">날씨 필터</span>
    ) : (
      <WeatherIcon
        type={n}
        height={20}
        className="inline-block align-center"
      ></WeatherIcon>
    ),
    callback: () => {DailyFilter?.setFilter((prev) => {
      return {
        ...prev,
        weather: n
      }
    })},
  }));

  return (
    <section className="flex items-center justify-between w-full">
      <div>
        <Toggle
          className="border-1 w-20 h-11 inline-flex items-center justify-center"
          data={toggleData}
          style={{ "--btn-bg": "#fff" } as CSSProperties}
        ></Toggle>
      </div>
      <LinkButton to="/daily/new">추가</LinkButton>
    </section>
  );
}

export default memo(DailyToolBar);
