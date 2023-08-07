import DayCard from "./cards/DayCard";

export default function Week() {
  return (
    <div className="week">
      <h2>Week</h2>
      <div className="days">
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
        <DayCard />
      </div>
    </div>
  );
}
