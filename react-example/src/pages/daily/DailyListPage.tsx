import "@/App.css";
import Header from "@/components/Header";
import Button from "@/components/Button";
import LinkButton from "@/components/LinkButton";
import DailyBrowser from "@/components/daily/DailyBrowser";

function DailyPage() {
  return (
    <>
      <section className="flex items-center justify-center p-4">
        <Button>이전</Button>
        <h3 className="flex-1 max-w-50 bg-[red]">{}날짜</h3>
        <Button>다음</Button>
      </section>
      <DailyBrowser></DailyBrowser>
    </>
  );
}

export default DailyPage;
