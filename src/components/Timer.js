import TimeCard from "./cards/TimeCard";
import { useState, useEffect, useCallback } from "react";
import { calculateTimeRemaining } from "../utils/remainingTimeCalculator";

export default function Timer({ targetDate }) {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(targetDate));

  useEffect(() => {
    setTimeRemaining(calculateTimeRemaining(targetDate));
  }, [targetDate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="timer">
      <TimeCard number={timeRemaining.days} title="DAYS" />
      <TimeCard number={timeRemaining.hours} title="HOURS" />
      <TimeCard number={timeRemaining.minutes} title="MINUTES" />
      <TimeCard number={timeRemaining.seconds} title="SECONDS" />
    </div>
  );
}
