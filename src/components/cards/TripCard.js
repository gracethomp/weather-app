export default function TripCard({ trip, isSelected, onClick }) {
  const handleTripCardClick = () => {
    onClick();
  };

  return (
    <div className={"trip-card " + (isSelected ? "selected-trip" : "")} onClick={handleTripCardClick}>
      <img src={trip.imageUrl} alt={trip.city + " trip image"} />
      <div className="trip-card-info">
        <h5 className="trip-card-title">{trip.city}</h5>
        <p className="trip-card-dates">
          {trip.startDate + " - " + trip.endDate}
        </p>
      </div>
    </div>
  );
}
