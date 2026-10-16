import type { ReactNode, MouseEventHandler } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

function Button({ children, onClick }: ButtonProps) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
