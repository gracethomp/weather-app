import Timer from "./Timer";
import axios from "axios";
import { useEffect, useState } from "react";
import { getDayOfWeek } from "../utils/dayOfWeekPicker";

export default function TodayInfoSection({ selectedTrip }) {
  const [currentTemp, setCurrentTemp] = useState();
  useEffect(() => {
    axios
      .get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${selectedTrip.city}/today?unitGroup=metric&include=current%2Cfcst&key=KEGZJRSYFZNKBD7W5TUFME5UR&contentType=json`
      )
      .then((response) => {
        setCurrentTemp(response.data.currentConditions.temp);
        console.log();
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <>
      <div className="status">
        <div className="today-weather">
          <p className="current-day">{getDayOfWeek(new Date())}</p>
          <div className="current-temp">
            <p className="current-weather-emoji">⛅ {currentTemp}</p>
            <p className="celsius">°C</p>
          </div>
          <p className="current-city">{selectedTrip.city}</p>
        </div>
        <Timer />
      </div>
    </>
  );
}
