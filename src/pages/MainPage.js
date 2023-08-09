import React, { useState, useEffect } from "react";
import TodayInfoSection from "../components/TodayInfoSection.js";
import Trips from "../components/Trips.js";
import Week from "../components/Week.js";
import Header from "../layout/Header.js";
import { useSelector } from "react-redux";
import { useFetchDays } from "../hooks/fetchData.js";
import Search from "../components/fields/Search.js";

export default function MainPage() {
  const trips = useSelector((state) => state.trips);
  const [selectedTrip, setSelectedTrip] = useState(trips[0]);
  const [filteredTrips, setTrips] = useState(trips);
  // const days = useFetchDays(selectedTrip);
  

  useEffect(() => {
    setTrips(trips);
  }, [trips]);

  const handleSearch = (searchText) => {
    const filtered = trips.filter((trip) =>
      trip.city.toLowerCase().includes(searchText.toLowerCase())
    );
    setTrips(filtered);
  };

  return (
    <>
      <div className="main">
        <div className="trips-select-section">
          <Header />
          <Search placeholder="Search your trip" onSearch={(value) => handleSearch(value)}/>
          <Trips tripsList={filteredTrips} selectedId={selectedTrip.id} setSelected={(trip) => setSelectedTrip(trip)}/>
          {/* <Week days={days} /> */}
        </div>
        <TodayInfoSection
          selectedTrip={selectedTrip}
        />
      </div>
    </>
  );
}
