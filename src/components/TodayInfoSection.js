import Timer from "./Timer";
import { getDayOfWeek } from "../utils/dayOfWeekPicker";
import { useFetchCurrentCondition } from "../hooks/fetchData";

export default function TodayInfoSection({ selectedTrip }) {
  const { currentTemp, emoji } = useFetchCurrentCondition(selectedTrip);

  return (
    <>
      <div className="status">
        <div className="today-weather">
          <p className="current-day">{getDayOfWeek(new Date())}</p>
          <div className="current-temp">
            <p className="current-weather-emoji">
              {emoji} {currentTemp}
            </p>
            <p className="celsius">°C</p>
          </div>
          <p className="current-city">{selectedTrip.city}</p>
        </div>
        <Timer />
      </div>
    </>
  );
}
