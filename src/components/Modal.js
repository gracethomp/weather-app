import Dropdown from "./CityDropdown";
import DatePicker from "./DatePicker";
import ModalButtons from "./buttons/ModalButtons";

export default function Modal({handleCancelClick}) {
  return (
    <div className="modal" id="myModal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Create trip</h3>
          <p onClick={handleCancelClick}>&times;</p>
        </div>
        <div className="fields">
          <Dropdown />
          <DatePicker labelText="Start date:" id="start"/>
          <DatePicker labelText="End date:" id="end"/>
        </div>
        <ModalButtons cancel={handleCancelClick}/>
      </div>
    </div>
  );
}
