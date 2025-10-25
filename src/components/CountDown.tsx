import { EVENT_DATE } from "@/lib/data";
import NumberFlow, { NumberFlowGroup } from "@number-flow/react";
import { useEffect, useState } from "react";

export const CountDown = () => {
  const calculateTimeLeft = () => {
    const now = Date.now();
    const difference = EVENT_DATE.getTime() - now;
    return Math.max(0, Math.floor(difference / 1000));
  };

  const [seconds, setSeconds] = useState(calculateTimeLeft);

  useEffect(() => {
    if (seconds <= 0) return;

    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        const newSeconds = prevSeconds - 1;
        return newSeconds < 0 ? 0 : newSeconds;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  if (seconds === 0) {
    return (
      <div className="text-center text-4xl font-bold md:text-6xl">
        <p className="bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Event Started!
        </p>
      </div>
    );
  }

  return (
    <NumberFlowGroup>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        <TimeUnit value={days} label="Days" />
        <TimeUnit value={hours} label="Hours" />
        <TimeUnit value={minutes} label="Minutes" />
        <TimeUnit value={secs} label="Seconds" />
      </div>
    </NumberFlowGroup>
  );
};

const TimeUnit = ({ value, label }: { value: number; label: string }) => {
  return (
    <div className="flex flex-col items-center">
      <div
        style={{
          fontVariantNumeric: "tabular-nums",
          "--number-flow-char-height": "0.85em",
        }}
        className="font-mono text-5xl font-bold md:text-7xl"
      >
        <NumberFlow
          trend={-1}
          value={value}
          format={{ minimumIntegerDigits: 2 }}
        />
      </div>
      <span className="text-yellow mt-2 text-sm font-medium tracking-wide uppercase md:text-base">
        {label}
      </span>
    </div>
  );
};
