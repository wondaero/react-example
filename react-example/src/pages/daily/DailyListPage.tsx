import "@/App.css";
import Button from "@/components/Button";
import DailyBrowser from "@/components/daily/DailyBrowser";
import { DailyFilterContext } from "@/contexts/DailyContext";
import useContextCheck from "@/hooks/useContextCheck";
import { getYYYYMM } from "@/utils/date";

const setMonth = (month: number, dir: number) => {
  const d = new Date(month);
  return new Date(d.setMonth(d.getMonth() + dir)).getTime();
};
function DailyPage() {
  const month = useContextCheck(DailyFilterContext);

  const setMonthFilter = (dir: number) => {
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
