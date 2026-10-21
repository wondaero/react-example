import type { ReactNode } from "react";
import { Link } from "react-router";
import styles from "./Button.module.css";

type LinkButtonProps = {
  to: string;
  children: ReactNode;
  className?: string;
};

function LinkButton({ to, children, className }: LinkButtonProps) {
  return (
    <Link to={to} className={`${styles.btn} ${className ?? ""}`}>
      {children}
    </Link>
  );
}

export default LinkButton;
