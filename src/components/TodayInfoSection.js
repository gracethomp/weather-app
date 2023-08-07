import Timer from "./Timer";

export default function TodayInfoSection() {
  return (
    <>
      <div className="status">
        <div className="today-weather">
          <p className="current-day">Sunday</p>
          <div className="current-temp">
            <p className="current-weather-emoji">⛅ 28</p>
            <p className="celsius">°C</p>
          </div>
          <p className="current-city">Berlin</p>
        </div>
        <Timer />
      </div>
      
    </>
  );
}
