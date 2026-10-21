import type { ReactNode, MouseEventHandler, CSSProperties } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: "submit" | "button" | "reset";
  style?: CSSProperties;
};

function Button({ type, children, onClick, className, style }: ButtonProps) {
  return (
    <button
      type={type}
      className={`${styles.btn} ${className ?? ""}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
}

export default Button;
