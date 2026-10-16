import styles from "./Input.module.css";
import type { ChangeEventHandler } from "react";

type InputProps = {
  label?: string;
  labelPosition?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

function Button({
  label,
  labelPosition,
  type,
  placeholder,
  className,
  onChange,
}: InputProps) {
  return (
    <label
      className={`${styles.inputWrapper} ${labelPosition === "top" && styles.withTopLabel}`}
    >
      {label && <strong>{label}</strong>}
      <input
        type={type}
        placeholder={placeholder}
        className={`${styles.input} ${className || ""}`}
        onChange={onChange}
      ></input>
    </label>
  );
}

export default Button;
