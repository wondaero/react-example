import styles from "./CounterViewer.module.css";

type CounterViewerProps = {
  num: number;
  last: string | null;
};

function CounterViewer({ num, last }: CounterViewerProps) {
  const fontSize = () => {
    let fValue = num + 40;
    if (fValue > 100) fValue = 100;
    if (fValue < 12) fValue = 12;

    return fValue + "px";
  };

  return (
    <h2
      className={styles.counterViewer}
      style={{ "--font-size": `${fontSize()}` } as React.CSSProperties}
    >
      <strong>
        {num}
        <span key={num} className={last?.indexOf("-") === 0 ? "minus" : "plus"}>
          {last}
        </span>
      </strong>
    </h2>
  );
}

export default CounterViewer;
