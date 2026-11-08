import "@/App.css";
import { useContext } from "react";

import Button from "@/components/Button";
import DailyBrowser from "@/components/daily/DailyBrowser";
import { DailyFilterContext } from "@/pages/daily/DailyPage";
import { getYYYYMM } from "@/utils/date";

const setMonth = (month, dir) => {
  const d = new Date(month);
  return new Date(d.setMonth(d.getMonth() + dir)).getTime();
}
function DailyPage() {

  const month = useContext(DailyFilterContext);
  
  const setMonthFilter = (dir) => {
    month.setFilter((prev) => ({
      ...prev,
      month: setMonth(month.filter.month, dir)
    }));
  }

  return (
    <>
      <section className="flex items-center justify-center p-4">
        <Button onClick={() => setMonthFilter(-1)}>이전</Button>
        <h3 className="flex-1 max-w-50 text-black text-lg">{getYYYYMM(month.filter.month)}</h3>
        <Button onClick={() => setMonthFilter(1)}>다음</Button>
      </section>
      <DailyBrowser></DailyBrowser>
    </>
  );
}

export default DailyPage;
