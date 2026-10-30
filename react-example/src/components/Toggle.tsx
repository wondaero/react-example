import { type CSSProperties, type ReactNode, useState, useEffect } from "react";
import styles from "./Button.module.css";

type ToggleItem = { title: ReactNode; active?: boolean; callback?: () => void };
type ToggleProps = {
  // onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  style?: CSSProperties;
  data: [ToggleItem, ...ToggleItem[]];
};

function Toggle({ data, className, style }: ToggleProps) {
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
