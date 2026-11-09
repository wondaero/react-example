import "@/App.css";
import Button from "@/components/Button";
import DailyBrowser from "@/components/daily/DailyBrowser";
import { DailyFilterContext } from "@/contexts/DailyContext";
import useContextCheck from "@/hooks/useContextCheck";
import { getYYYYMM } from "@/utils/date";
import { type MouseEvent, useCallback } from "react";

const setMonth = (month: number, dir: number) => {
  const d = new Date(month);
  return new Date(d.setMonth(d.getMonth() + dir)).getTime();
};
function DailyPage() {
  const { filter, setFilter } = useContextCheck(DailyFilterContext);

  const setMonthFilter = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const dir = Number(e.currentTarget.dataset.dir);
    if(!dir) return;

    setFilter((prev) => ({
      ...prev,
      month: setMonth(prev.month, dir),
    }));
  }, [setFilter]);

  const setToday = useCallback(() => {
    setFilter((prev) => ({
      ...prev,
      month: Date.now(),
    }));
  }, [setFilter]);

  return (
    <>
      <section className="flex items-center justify-center gap-2 p-4">
        <h3 className="text-black text-lg w-20">
          {getYYYYMM(filter.month)}
        </h3>
        <div className="flex gap-2">
          <Button data-dir="-1" onClick={setMonthFilter}>이전</Button>
          <Button onClick={setToday}>오늘</Button>
          <Button data-dir="1" onClick={setMonthFilter}>다음</Button>
        </div>
      </section>
      <DailyBrowser></DailyBrowser>
    </>
  );
}

export default DailyPage;
