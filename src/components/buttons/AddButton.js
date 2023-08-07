import plus from "../../assets/plus.svg"

export default function AddButton({ addMessage }) {
  return (
    <div className="add-new">
      <img src={plus} alt="plus icon" />
      <p>{addMessage}</p>
    </div>
  );
}
