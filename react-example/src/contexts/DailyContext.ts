import { createContext, type Dispatch, type SetStateAction } from "react";
import type { Daily, Actions, DailyFilter } from "@/types/daily";

export const DailyContext = createContext<Daily[]>([]);
export const DailyActionsContext = createContext<Actions | null>(null);
export const DailyFilterContext = createContext<{
  filter: DailyFilter;
  setFilter: Dispatch<SetStateAction<DailyFilter>>;
} | null>(null);
