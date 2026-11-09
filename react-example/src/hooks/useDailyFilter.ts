import { DailyFilterContext } from "@/contexts/DailyContext";
import { useContext } from "react";

export default function useDailyFilter() {
  const ctx = useContext(DailyFilterContext);

  if (!ctx) throw new Error("DailyPage 안에서만 사용 가능");

  return ctx;
}
