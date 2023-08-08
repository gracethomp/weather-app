export default function DayCard({ day }) {
  const date = new Date(day.datetime);
  const dayOfWeek = date.getDay();
  const daysOfWeekNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = daysOfWeekNames[dayOfWeek];
  return (
    <div className="day-card">
      <p>{dayName}</p>
      <p className="day-card-weather-emoji">⛅</p>
      <p className="low-high-temp"> {day.tempmax}°/{day.tempmin}°</p>
    </div>
  );
}
