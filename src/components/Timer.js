import TimeCard from "./cards/TimeCard";
import { useState, useEffect } from "react";

export default function Timer({targetDate}) {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  function calculateTimeRemaining() {
    const currentTime = new Date();
    const timeDifference = targetDate - currentTime;

    if (timeDifference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer">
      <TimeCard number={timeRemaining.days} title="DAYS" />
      <TimeCard number={timeRemaining.hours} title="HOURS" />
      <TimeCard number={timeRemaining.minutes} title="MINUTES" />
      <TimeCard number={timeRemaining.seconds} title="SECONDS" />
    </div>
  );
}
