import TripCard from "./cards/TripCard.js";
import AddButton from "./buttons/AddButton.js";
import { useState, useMemo } from "react";
import Modal from "./Modal.js";
import Pagination from "./Pagination.js";
import getPaginationIndexes from "../utils/startEndIndex.js";

export default function Trips({ tripsList, selectedId, setSelected }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const tripsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);

  const { startingIndex, endingIndex } = useMemo(
    () => getPaginationIndexes(currentPage, tripsPerPage),
    [tripsPerPage, currentPage]
  );

  const tripsToShow = useMemo(() => {
    const sorted = [...tripsList].sort((a, b) => {
      return new Date(a.startDate) - new Date(b.startDate);
    });

    return sorted.filter((trip, index) => {
      return index >= startingIndex && index < endingIndex;
    });
  }, [tripsList, endingIndex, startingIndex]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div className="trips">
        {tripsToShow?.map((trip) => (
          <TripCard
            trip={trip}
            isSelected={selectedId === trip.id}
            onClick={() => setSelected(trip)}
          />
        ))}
        <AddButton
          addMessage={"Add new trip"}
          onClick={() => setModalVisible(true)}
        />
      </div>
      <Pagination
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        currentPage={currentPage}
        length={tripsList.length}
        endingIndex={endingIndex}
      />
      {isModalVisible && (
        <Modal
          handleCancelClick={() => handleModalClose()}
          id={tripsList.length}
        />
      )}
    </>
  );
}
