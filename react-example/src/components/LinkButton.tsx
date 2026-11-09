import { type ReactNode, type CSSProperties, memo } from "react";
import { Link } from "react-router";
import styles from "./Button.module.css";

type LinkButtonProps = {
  to: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  bg?: string;
  color?: string;
};

function LinkButton({ to, children, className, bg, color, style }: LinkButtonProps) {
  const combiStyle = {
    ...(bg && { "--btn-bg": bg }),
    ...(color && { "--btn-color": color }),
    ...style,
  };


  return (
    <Link to={to} className={`${styles.btn} ${className ?? ""}`} style={combiStyle}>
      {children}
    </Link>
  );
}

export default memo(LinkButton);
