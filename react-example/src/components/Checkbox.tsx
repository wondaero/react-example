import styles from "./Checkbox.module.css";
import { type ChangeEventHandler } from "react";

type InputProps = {
  title?: string;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
  effect?: boolean;
};

function Checkbox({ checked, title, className, onChange, effect }: InputProps) {
  // const [isChked, setIsChked] = useState(false);
  return (
    <label className={`${styles.chkboxWrapper} ${className || ""}`}>
      <input
        type="checkbox"
        className={`${styles.input}`}
        onChange={onChange}
        checked={checked}
      ></input>
      <span></span>
      {title && (
        <strong
          className={`text-[#000] ${effect ? styles.effect1 : undefined}`}
        >
          {title}
        </strong>
      )}
    </label>
  );
}

export default Checkbox;
