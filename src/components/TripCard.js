export default function TripCard({ image, cardTitle, dates }) {
  return (
    <div className="trip-card">
      <img src={image} alt={cardTitle + "trip image"} />
      <div className="trip-card-info">
        <h5 className="trip-card-title">{cardTitle}</h5>
        <p className="trip-card-dates">{dates}</p>
      </div>
    </div>
  );
}
