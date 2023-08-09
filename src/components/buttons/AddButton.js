import plus from "../../assets/plus.svg"

export default function AddButton({ addMessage, onClick }) {
  return (
    <div className="add-new" onClick={onClick}>
      <img src={plus} alt="plus icon" />
      <p>{addMessage}</p>
    </div>
  );
}
