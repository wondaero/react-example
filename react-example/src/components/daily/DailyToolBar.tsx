import LinkButton from "@/components/LinkButton";
import Toggle from "@/components/Toggle";
import { useContext, memo, type CSSProperties } from "react";
import WeatherIcon from "@/components/WeatherIcon";
import { DailyFilterContext } from "@/contexts/DailyContext";
import type { WeatherFilter } from "@/types/daily";

const weathers: WeatherFilter[] = [0, 1, 2, 3, 4];

function DailyToolBar() {
  console.log("데일리툴바");
  const DailyFilter = useContext(DailyFilterContext);

  const toggleData = weathers.map((n) => ({
    title:
      n === 0 ? (
        <span className="text-xs">날씨 필터</span>
      ) : (
        <WeatherIcon
          type={n}
          height={20}
          className="inline-block align-center"
        ></WeatherIcon>
      ),
    callback: () => {
      DailyFilter?.setFilter((prev) => {
        return {
          ...prev,
          weather: n,
        };
      });
    },
    active: n === DailyFilter?.filter.weather,
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
