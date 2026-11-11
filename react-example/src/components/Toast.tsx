import { memo, type ReactNode, useRef, type CSSProperties } from "react";

type ToastProps = {
  message: ReactNode;
  bg?: string;
  color?: string;
  toastClass?: string;
  toastStyle?: CSSProperties;
  textClass?: string;
  textStyle?: CSSProperties;
};

function Toast({
  message,
  bg,
  color,
  toastStyle,
  toastClass,
  textStyle,
  textClass,
}: ToastProps) {
  const toast = useRef(null);

  const toastCombiStyle = {
    ...(bg && { "--btn-bg": bg }),
    ...toastStyle,
  };
  const textCombiStyle = {
    ...(color && { "--btn-color": color }),
    ...textStyle,
  };
  return (
    <aside ref={toast} style={toastCombiStyle} className={toastClass ?? ""}>
      <h2 style={textCombiStyle} className={textClass ?? ""}>
        {message}
      </h2>
    </aside>
  );
}

export default memo(Toast);
