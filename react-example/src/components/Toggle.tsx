import { type CSSProperties, type ReactNode, useState } from "react";
import styles from "./Button.module.css";

type ToggleItem = { title: ReactNode; active?: boolean; callback?: () => void };
type ToggleProps = {
  // onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  style?: CSSProperties;
  data: ToggleItem[];
};

function Toggle({ data, className, style }: ToggleProps) {
  if (data.length < 2) {
    throw new Error("Toggle의 data는 2개 이상이어야 합니다!");
  }
  const [idx, setIdx] = useState(() => {
    const active = data.findIndex((d) => d.active);
    return active > 0 ? active : 0;
  });

  console.log("토글");

  return (
    <button
      className={`${styles.btn} ${className ?? ""}`}
      onClick={() => {
        const next = (idx + 1) % data.length;
        setIdx(next);
        data[next].callback?.();
      }}
      style={style}
    >
      {data[idx].title}
    </button>
  );
}

export default Toggle;
