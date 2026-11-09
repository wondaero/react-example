import "@/App.css";
import { useContext } from "react";

import Button from "@/components/Button";
import DailyBrowser from "@/components/daily/DailyBrowser";
import { DailyFilterContext } from "@/contexts/DailyContext";
import { getYYYYMM } from "@/utils/date";

const setMonth = (month, dir) => {
  const d = new Date(month);
  return new Date(d.setMonth(d.getMonth() + dir)).getTime();
};
function DailyPage() {
  const month = useContext(DailyFilterContext);

  const setMonthFilter = (dir) => {
    month.setFilter((prev) => ({
      ...prev,
      month: setMonth(month.filter.month, dir),
    }));
  };

  const setToday = () => {
    month.setFilter((prev) => ({
      ...prev,
      month: Date.now(),
    }));
  };

  return (
    <>
      <section className="flex items-center justify-center gap-2 p-4">
        <h3 className="text-black text-lg w-20">
          {getYYYYMM(month.filter.month)}
        </h3>
        <div className="flex gap-2">
          <Button onClick={() => setMonthFilter(-1)}>이전</Button>
          <Button onClick={setToday}>오늘</Button>
          <Button onClick={() => setMonthFilter(1)}>다음</Button>
        </div>
      </section>
      <DailyBrowser></DailyBrowser>
    </>
  );
}

export default DailyPage;
