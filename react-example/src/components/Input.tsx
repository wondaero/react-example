import styles from "./Input.module.css";
import type { ChangeEventHandler, KeyboardEventHandler, Ref } from "react";

type InputProps = {
  label?: string;
  labelPosition?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  wrapperClass?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyUp?: KeyboardEventHandler<HTMLInputElement>;
  value?: string;
  ref?: Ref<HTMLInputElement>;
  readonly?: boolean;
};

function Input({
  label,
  labelPosition,
  type,
  placeholder,
  className,
  wrapperClass,
  onChange,
  onKeyUp,
  value,
  ref,
  readonly,
}: InputProps) {
  return (
    <label
      className={`${styles.inputWrapper} ${labelPosition === "top" && styles.withTopLabel} ${wrapperClass}`}
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
        readOnly={readonly}
      ></input>
    </label>
  );
}

export default Input;
