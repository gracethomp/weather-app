import { getDayOfWeek } from "../../utils/dayOfWeekPicker";
import { getEmojiByName } from "../../utils/weatherEmojiPicker";

export default function DayCard({ day }) {
  const dayName = getDayOfWeek(day.datetime);
  return (
    <div className="day-card">
      <p>{dayName}</p>
      <p className="day-card-weather-emoji">{getEmojiByName(day.icon)}</p>
      <p className="low-high-temp"> {day.tempmax}°/{day.tempmin}°</p>
    </div>
  );
}
