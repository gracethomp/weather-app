import Search from "./Search.js";
import TripCard from "./TripCard.js";
import berlinImage from "../assets/berlin.jpg"
import tokyoImage from "../assets/tokyo.jpg"
import barcelonaImage from "../assets/barcelona.jpg"
import AddButton from "./AddButton.js";

export default function Trips() {
  return (
    <>
      <Search placeholder="Search your trip" />
      <div className="trips">
        <TripCard image={berlinImage} cardTitle="Berlin" dates="25/09/2023 - 30/09/2023"/>
        <TripCard image={tokyoImage} cardTitle="Tokyo" dates="31/10/2023 - 30/11/2023"/>
        <TripCard image={barcelonaImage} cardTitle="Barcelona" dates="25/09/2023 - 30/09/2023"/>
        <AddButton addMessage={"Add new trip"}/>
      </div>
    </>
  );
}
