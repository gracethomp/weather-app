import Search from "./Search.js";
import TripCard from "./cards/TripCard.js";
import AddButton from "./buttons/AddButton.js";
import { useState } from "react";
import Modal from "./Modal.js";

export default function Trips({ tripsList, selectedId }) {
  const [id, setId] = useState(7);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Search placeholder="Search your trip" />
      <div className="trips">
        {tripsList?.map((trip) => (
          <TripCard trip={trip} isSelected={selectedId === trip.id} />
        ))}
        <AddButton
          addMessage={"Add new trip"}
          onClick={() => setModalVisible(true)}
        />
      </div>
      {isModalVisible && <Modal handleCancelClick={() => handleModalClose()} id={id}/>}
    </>
  );
}
