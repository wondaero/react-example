import styles from "./Checkbox.module.css";
import type { ChangeEventHandler } from "react";

type InputProps = {
  title?: string;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
  effect?: boolean;
};

function Checkbox({ title, className, onChange, effect }: InputProps) {
  return (
    <label className={`${styles.chkboxWrapper} ${className || ""}`}>
      <input
        type="checkbox"
        className={`${styles.input}`}
        onChange={onChange}
      ></input>
      <span></span>
      {title && <strong>{title}</strong>}
    </label>
  );
}

export default Checkbox;
