import type { ReactNode, MouseEventHandler } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: 'submit' | 'button' | 'reset';
};

function Button({ type, children, onClick, className }: ButtonProps) {
  return (
    <button type={type} className={`${styles.btn} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
