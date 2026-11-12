import { memo, type ReactNode, useRef, type CSSProperties } from "react";
import styles from "./Toast.module.css";

type ToastProps = {
  children: ReactNode;
  bg?: string;
  color?: string;
  toastClass?: string;
  toastStyle?: CSSProperties;
  textClass?: string;
  textStyle?: CSSProperties;
};

function Toast({
  children,
  bg,
  color,
  toastStyle,
  toastClass,
  textStyle,
  textClass,
}: ToastProps) {
  const toast = useRef(null);

  const toastCombiStyle = {
    ...(bg && { "--toast-bg": bg }),
    ...toastStyle,
  };
  const textCombiStyle = {
    ...(color && { "--toast-color": color }),
    ...textStyle,
  };
  return (
    <aside
      ref={toast}
      style={toastCombiStyle}
      className={`${styles.toastWrapper} ${toastClass ?? ""}`}
    >
      <h2
        style={textCombiStyle}
        className={`${styles.toast} ${textClass ?? ""}`}
      >
        {children}
      </h2>
    </aside>
  );
}

export default memo(Toast);
