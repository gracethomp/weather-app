import { getDayOfWeek } from "../../utils/dayOfWeekPicker";

export default function DayCard({ day }) {
  const dayName = getDayOfWeek(day.datetime);
  return (
    <div className="day-card">
      <p>{dayName}</p>
      <p className="day-card-weather-emoji">⛅</p>
      <p className="low-high-temp"> {day.tempmax}°/{day.tempmin}°</p>
    </div>
  );
}
