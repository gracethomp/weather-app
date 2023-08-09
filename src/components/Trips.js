import TripCard from "./cards/TripCard.js";
import AddButton from "./buttons/AddButton.js";
import { useState } from "react";
import Modal from "./Modal.js";

export default function Trips({ tripsList, selectedId, setSelected }) {
  const [id, setId] = useState(7);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div className="trips">
        {tripsList?.map((trip) => (
          <TripCard trip={trip} isSelected={selectedId === trip.id} onClick={() => setSelected(trip)}/>
        ))}
        <AddButton
          addMessage={"Add new trip"}
          onClick={() => setModalVisible(true)}
        />
      </div>
      {isModalVisible && <Modal handleCancelClick={() => handleModalClose()} id={id} handleAdd={() => setId(id + 1)}/>}
    </>
  );
}
