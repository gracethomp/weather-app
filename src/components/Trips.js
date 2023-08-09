import TripCard from "./cards/TripCard.js";
import AddButton from "./buttons/AddButton.js";
import { useState } from "react";
import Modal from "./Modal.js";
import Button from "./buttons/Button.js";

export default function Trips({ tripsList, selectedId, setSelected }) {
  const [id, setId] = useState(7);
  const [isModalVisible, setModalVisible] = useState(false);
  const tripsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  const startingIndex = (currentPage - 1) * tripsPerPage;
  const endingIndex = startingIndex + tripsPerPage;

  const tripsToShow = tripsList.filter((trip, index) => {
    return index >= startingIndex && index < endingIndex;
  });

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div className="trips">
        {tripsToShow?.map((trip) => (
          <TripCard trip={trip} isSelected={selectedId === trip.id} onClick={() => setSelected(trip)}/>
        ))}
        <AddButton
          addMessage={"Add new trip"}
          onClick={() => setModalVisible(true)}
        />
      </div>
      <Button onClick={handlePrevPage} additionalClass="pagination-button" text="<"/>
      <Button onClick={handleNextPage} additionalClass="pagination-button" text=">"/>
      {isModalVisible && <Modal handleCancelClick={() => handleModalClose()} id={id} handleAdd={() => setId(id + 1)}/>}
    </>
  );
}
