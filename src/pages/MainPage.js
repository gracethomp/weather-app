import TodayInfoSection from "../components/TodayInfoSection.js";
import Trips from "../components/Trips.js";
import Week from "../components/Week.js";
import Header from "../layout/Header.js";

export default function MainPage() {
  return (
    <>
      <div className="main">
        <div className="trips-select-section">
          <Header />
          <Trips />
          <Week />
        </div>
        <TodayInfoSection/>
      </div>
    </>
  );
}
