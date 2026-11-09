import { useContext, memo } from "react";
import { Link } from "react-router";

import type { Daily } from "@/types/daily";
import useContextCheck from "@/hooks/useContextCheck";
import { DailyFilterContext } from "@/contexts/DailyContext";

import WeatherIcon from "@/components/WeatherIcon";
import { DailyContext } from "@/contexts/DailyContext";

import { getYYYYMMDD, getYYYYMM } from "@/utils/date";

const DailyItem = memo(function ({ data }: { data: Daily }) {
  return (
    <li className="border-b-1 border-[#ccc] p-3">
      <Link to={data.id} className="flex w-full items-center gap-2">
        <div className="w-20 flex justify-center mr-2">
          <WeatherIcon type={data.weather} height={50}></WeatherIcon>
        </div>
        <h4 className="flex-1 text-left">{data.title}</h4>
        <span>{getYYYYMMDD(data.date)}</span>
      </Link>
    </li>
  );
});

function DailyList() {
  const DailyList = useContext(DailyContext);
  const { filter } = useContextCheck(DailyFilterContext);

  const filteredData = DailyList.filter((d) => {
    return (
      getYYYYMM(filter.month) === getYYYYMM(d.date) &&
      (filter.weather === 0 || d.weather === filter.weather)
    );
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
