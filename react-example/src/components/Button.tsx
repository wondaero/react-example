import type { ReactNode, MouseEventHandler, CSSProperties } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: "submit" | "button" | "reset";
  style?: CSSProperties;
  bg?: string,
  textColor?: string
};

function Button({ type, children, onClick, className, bg, textColor, style }: ButtonProps) {
  console.log("버튼", children);

  const combiStyle = {
    ...(bg && { "--btn-bg": bg }),
    ...(textColor && { "--btn-color": textColor }),
    ...style
  }

  return (
    <button
      type={type}
      className={`${styles.btn} ${className ?? ""}`}
      onClick={onClick}
      style={combiStyle}
    >
      {children}
    </button>
  );
}

export default Button;
