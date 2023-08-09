import DayCard from "./cards/DayCard";

export default function Week({ days }) {
  return (
    <div className="week">
      <h2>Week</h2>
      <div className="days">
        {/* {days.map((day) => (
          <DayCard day={day}/>
        ))} */}
      </div>
    </div>
  );
}
