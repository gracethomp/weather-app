import React, { useState, useEffect } from "react";
import TodayInfoSection from "../components/TodayInfoSection.js";
import Trips from "../components/Trips.js";
import Week from "../components/Week.js";
import Header from "../layout/Header.js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useFetchDays } from "../hooks/fetchData.js";

export default function MainPage() {
  const trips = useSelector((state) => state.trips);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTrip, setSelectedTrip] = useState(trips[0]);
  // const days = useFetchDays(trips[0]);
 

  return (
    <>
      <div className="main">
        <div className="trips-select-section">
          <Header />
          <Trips tripsList={trips} selectedId={selectedTrip.id} />
          {/* <Week days={days} /> */}
        </div>
        <TodayInfoSection
          selectedTrip={selectedTrip}
        />
      </div>
    </>
  );
}
