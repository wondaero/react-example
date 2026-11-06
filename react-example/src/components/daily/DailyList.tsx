
import { useContext, useRef, memo, type CSSProperties } from "react";
import { Link } from "react-router";

import type { Daily } from "@/types/daily";
import useDailyfilter  from "@/hooks/useDailyFilter";

import WeatherIcon from "@/components/WeatherIcon";
import { DailyContext } from "@/pages/daily/DailyPage";

const dateParse = (d: string | number) => {
  return new Date(d).toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};


const DailyItem = memo(function ({ data }: { data: Daily }) {
  return (
    <li className="border-b-1 border-[#ccc] p-3">
      <Link to={data.id} className="flex w-full items-center gap-2">
        <div className="w-20 flex justify-center mr-2">
          <WeatherIcon type={data.weather} height={50}></WeatherIcon>
        </div>
        <h4 className="flex-1 text-left">{data.title}</h4>
        <span>{dateParse(data.date)}</span>
      </Link>
    </li>
  );
});


function DailyList({ keyword = "" }: { keyword?: string }) {
  const DailyList = useContext(DailyContext);
  // const DailyFilter = useContext(DailyFilterContext);
  const { filter } = useDailyfilter();

  const filteredData = DailyList.filter(d => {
    return (filter.month === d.date) && filter.weather === 0 || d.weather === filter.weather
  });

  return filteredData && filteredData.length ? (
    <ul className="flex flex-col gap-2 w-full">
      {filteredData.map((item) => (
        <DailyItem key={item.id} data={item}></DailyItem>
      ))}
    </ul>
  ) : (
    <h2>
      데이터가 없습니다.
      <br />
      데이터를 추가해보세요.
    </h2>
  );
}

export default DailyList;
