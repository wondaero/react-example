import styles from "./Input.module.css";
import type { ChangeEventHandler, KeyboardEventHandler, Ref } from "react";

type InputProps = {
  label?: string;
  labelPosition?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  labelClass?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyUp?: KeyboardEventHandler<HTMLInputElement>;
  value?: string;
  ref?: Ref<HTMLInputElement>;
};

function Button({
  label,
  labelPosition,
  type,
  placeholder,
  className,
  labelClass,
  onChange,
  onKeyUp,
  value,
  ref,
}: InputProps) {
  return (
    <label
      className={`${styles.inputWrapper} ${labelPosition === "top" && styles.withTopLabel} ${labelClass}`}
    >
      {label && <strong>{label}</strong>}
      <input
        type={type}
        placeholder={placeholder}
        className={`${styles.input} ${className ?? ""}`}
        onChange={onChange}
        onKeyUp={onKeyUp}
        value={value}
        ref={ref}
      ></input>
    </label>
  );
}

export default Button;
