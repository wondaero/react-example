import { type CSSProperties, type ReactNode } from "react";
import styles from "./Button.module.css";

type ToggleItem = { title: ReactNode; active?: boolean; callback?: () => void };
type ToggleProps = {
  className?: string;
  style?: CSSProperties;
  data: ToggleItem[];
};

function Toggle({ data, className, style }: ToggleProps) {
  if (data.length < 2) {
    throw new Error("Toggle의 data는 2개 이상이어야 합니다!");
  }

  const found = data.findIndex((d) => d.active);
  const activeIdx = found > 0 ? found : 0;

  return (
    <button
      className={`${styles.btn} ${className ?? ""}`}
      onClick={() => {
        const next = (activeIdx + 1) % data.length;
        data[next].callback?.();
      }}
      style={style}
    >
      {data[activeIdx].title}
    </button>
  );
}

export default Toggle;
