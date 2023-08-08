import React, { useState, useEffect } from "react";
import TodayInfoSection from "../components/TodayInfoSection.js";
import Trips from "../components/Trips.js";
import Week from "../components/Week.js";
import Header from "../layout/Header.js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export default function MainPage() {
  const trips = useSelector((state) => state.trips);
  const [searchTerm, setSearchTerm] = useState("");

  const [apiData, setApiData] = useState([]);
  const [currentConditions, setCurrentConditions] = useState({});
  const [selectedTrip, setSelectedTrip] = useState(trips[0]);

  useEffect(() => {
    axios
      .get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${selectedTrip.city}/${selectedTrip.startDate}/${selectedTrip.endDate}?unitGroup=metric&elements=datetime%2Cname%2Caddress%2Ctempmax%2Ctempmin%2Ctemp%2Cicon&include=days%2Ccurrent&key=KEGZJRSYFZNKBD7W5TUFME5UR&contentType=json`
      )
      .then((response) => setApiData(response.data.days))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="main">
        <div className="trips-select-section">
          <Header />
          <Trips tripsList={trips} selectedId={selectedTrip.id} />
          <Week days={apiData} />
        </div>
        <TodayInfoSection
          selectedTrip={selectedTrip}
        />
      </div>
    </>
  );
}
