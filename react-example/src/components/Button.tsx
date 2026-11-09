import { type ReactNode, type MouseEventHandler, type CSSProperties, memo } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: "submit" | "button" | "reset";
  style?: CSSProperties;
  bg?: string;
  color?: string;
};

function Button({
  type,
  children,
  onClick,
  className,
  bg,
  color,
  style,
}: ButtonProps) {
  console.log("버튼", children);

  const combiStyle = {
    ...(bg && { "--btn-bg": bg }),
    ...(color && { "--btn-color": color }),
    ...style,
  };

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

export default memo(Button);
