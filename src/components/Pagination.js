import Button from "./buttons/Button.js";

export default function Pagination({ handlePrevPage, handleNextPage, currentPage, length, endingIndex }) {

  return (
    <>
      <Button
        onClick={handlePrevPage}
        additionalClass="pagination-button"
        text="<"
        isDisabled={currentPage === 1}
      />
      <Button
        onClick={handleNextPage}
        additionalClass="pagination-button"
        text=">"
        isDisabled={endingIndex >= length}
      />
    </>
  );
}
