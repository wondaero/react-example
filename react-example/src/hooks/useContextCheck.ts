import { useContext, type Context } from "react";

export default function useContextCheck<T>(ctx: Context<T | null>): T {
  const value = useContext(ctx);
  if (value === null) throw new Error("Provider 안에서만 사용 가능합니다.");
  return value;
}