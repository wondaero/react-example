import styles from "./Textarea.module.css";
import type { Ref } from "react";
import type { ChangeEventHandler } from "react";

type TextareaProps = {
  label?: string;
  labelPosition?: string;
  placeholder?: string;
  className?: string;
  wrapperClass?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  value?: string;
  ref?: Ref<HTMLTextAreaElement>;
  height?: number;
  resize?: boolean;
  readonly?: boolean;
};

function Textarea({
  label,
  labelPosition,
  placeholder,
  className,
  wrapperClass,
  onChange,
  value,
  ref,
  readonly,
}: TextareaProps) {
  return (
    <label
      className={`${styles.textareaWrapper} ${labelPosition === "top" && styles.withTopLabel} ${wrapperClass}`}
    >
      {label && <strong>{label}</strong>}
      <textarea
        placeholder={placeholder}
        className={`${styles.textarea} ${className ?? ""}`}
        onChange={onChange}
        value={value}
        ref={ref}
        readOnly={readonly}
      ></textarea>
    </label>
  );
}

export default Textarea;
