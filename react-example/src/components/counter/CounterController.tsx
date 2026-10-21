import Button from "../Button";
import { memo } from "react";

const buttons = [
  { name: "+1", value: 1 },
  { name: "+5", value: 5 },
  { name: "+10", value: 10 },
  { name: "-1", value: -1 },
  { name: "-5", value: -5 },
  { name: "-10", value: -10 },
  { name: "0", value: 0 },
];

type CounterButton = (typeof buttons)[number];

function CounterController({
  handler,
}: {
  handler: (num: number, val: string) => void;
}) {
  function countHandler(btn: CounterButton) {
    handler(btn.value, btn.name);
  }

  return (
    <section className="flex items-center gap-2 justify-center">
      {buttons.map((b) => (
        <Button
          key={b.name}
          onClick={() => {
            countHandler(b);
          }}
        >
          {b.name}
        </Button>
      ))}
    </section>
  );
}

export default memo(CounterController);
