import NumberFlow, { NumberFlowGroup } from "@number-flow/react";
import { useActionState, useEffect, useTransition } from "react";

export const CountDown = () => {
  async function decrement(previousState: number, formData: FormData) {
    return previousState - 1;
  }
  const [_, startTransition] = useTransition();
  const [seconds, setSeconds] = useActionState(decrement, 1000);
  const hh = Math.floor(seconds / 3600);
  const mm = Math.floor((seconds % 3600) / 60);
  const ss = seconds % 60;

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined = undefined;
    if (seconds !== 0) {
      timer = setInterval(() => {
        startTransition(() => setSeconds((seconds: number) => seconds - 1));
      }, 1000);
    } else if (timer) {
      clearTimeout(timer);
    }

    return () => clearInterval(timer);
  }, []);

  return (
    <NumberFlowGroup>
      <div
        style={{
          fontVariantNumeric: "tabular-nums",
          "--number-flow-char-height": "0.85em",
        }}
        className="~text-3xl/4xl flex items-baseline font-semibold"
      >
        <NumberFlow
          trend={-1}
          value={hh}
          format={{ minimumIntegerDigits: 2 }}
        />
        <NumberFlow
          prefix=":"
          trend={-1}
          value={mm}
          digits={{ 1: { max: 5 } }}
          format={{ minimumIntegerDigits: 2 }}
        />
        <NumberFlow
          prefix=":"
          trend={-1}
          value={ss}
          digits={{ 1: { max: 5 } }}
          format={{ minimumIntegerDigits: 2 }}
        />
      </div>
    </NumberFlowGroup>
  );
};
