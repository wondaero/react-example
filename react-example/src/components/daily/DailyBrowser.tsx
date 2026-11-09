import DailyToolBar from "./DailyToolBar";
import DailyList from "./DailyList";

function DailyBrowser() {
  console.log("데일리브라우저");

  return (
    <section className="flex flex-col items-center gap-4 max-w-200 w-full px-2 mx-auto">
      <DailyToolBar></DailyToolBar>
      <DailyList></DailyList>
    </section>
  );
}

export default DailyBrowser;
