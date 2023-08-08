import Dropdown from "./CityDropdown";
import DatePicker from "./DatePicker";
import ModalButtons from "./buttons/ModalButtons";

export default function Modal() {
  return (
    <div className="modal" id="myModal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Create trip</h3>
          <p>&times;</p>
        </div>
        <div className="fields">
          <Dropdown />
          <DatePicker labelText="Start date:" id="start"/>
          <DatePicker labelText="End date:" id="end"/>
        </div>
        <ModalButtons/>
      </div>
    </div>
  );
}
