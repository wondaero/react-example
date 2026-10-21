import styles from "./CounterViewer.module.css";

type CounterViewerProps = {
  num: number;
  last: string;
};

function CounterViewer({ num, last }: CounterViewerProps) {
  const fontSize = () => {
    let fValue = num + 40;
    if (fValue > 100) fValue = 100;
    if (fValue < 12) fValue = 12;

    return fValue + "px";
  };

  const effectClass = (last: string) => {
    if (last === "0") {
      return styles.init;
    } else if (last.startsWith("-")) {
      return styles.minus;
    } else {
      return styles.plus;
    }
  };

  return (
    <h2
      className={styles.counterViewer}
      style={{ "--font-size": `${fontSize()}` } as React.CSSProperties}
    >
      <strong>
        {num}
        <span
          key={num}
          // className={last?.startsWith("-") ? styles.minus : styles.plus}
          className={effectClass(last)}
        >
          {last}
        </span>
      </strong>
    </h2>
  );
}

export default CounterViewer;
