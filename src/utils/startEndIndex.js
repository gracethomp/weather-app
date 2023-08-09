export default function getPaginationIndexes(currentPage, tripsPerPage) {
  const startingIndex = (currentPage - 1) * tripsPerPage;
  const endingIndex = startingIndex + tripsPerPage;
  return { startingIndex, endingIndex };
}
