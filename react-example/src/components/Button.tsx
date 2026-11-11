import { memo, type ComponentProps } from "react";
import styles from "./Button.module.css";

type ButtonProps = ComponentProps<"button"> & {
  bg?: string;
  color?: string;
};

function Button({
  type,
  children,
  onClick,
  className,
  bg,
  color,
  style,
  ...rest
}: ButtonProps) {
  const combiStyle = {
    ...(bg && { "--btn-bg": bg }),
    ...(color && { "--btn-color": color }),
    ...style,
  };

  return (
    <button
      type={type}
      className={`${styles.btn} ${className ?? ""}`}
      onClick={onClick}
      style={combiStyle}
      {...rest}
    >
      {children}
    </button>
  );
}

export default memo(Button);
