import { memo, type ReactNode } from "react";
import styles from "./Header.module.css";

type HeaderProps = {
  children?: ReactNode;
  title?: ReactNode;
  left?: ReactNode;
  right?: ReactNode;
};

function Header({ children, title, left, right }: HeaderProps) {
  return (
    <header className={`${styles.header} ${children ? "" : "mb-5"}`}>
      {children ?? (
        <div className={styles.base}>
          <div>{left}</div>
          <h1>{title}</h1>
          <div>{right}</div>
        </div>
      )}
    </header>
  );
}

export default memo(Header);
