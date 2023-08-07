import TimeCard from "./cards/TimeCard";

export default function Timer() {
  return (
    <div className="timer">
      <TimeCard number="30" title="DAYS" />
      <TimeCard number="15" title="HOURS" />
      <TimeCard number="15" title="MINUTES" />
      <TimeCard number="30" title="SECONDS" />
    </div>
  );
}
