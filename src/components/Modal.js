import Dropdown from "./CityDropdown";
import DatePicker from "./DatePicker";
import ModalButtons from "./buttons/ModalButtons";
import { useState } from "react";

export default function Modal({ handleCancelClick }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  }

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  }

  const handleSaveTrip = () => {
    
  }

  return (
    <div className="modal" id="myModal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Create trip</h3>
          <p onClick={handleCancelClick}>&times;</p>
        </div>
        <div className="fields">
          <Dropdown
            selectedOption={selectedOption}
            handleOptionChange={handleOptionChange}
          />
          <DatePicker labelText="Start date:" id="start" date={startDate} handleChange={handleStartDateChange}/>
          <DatePicker labelText="End date:" id="end" date={endDate} handleChange={handleEndDateChange}/>
        </div>
        <ModalButtons cancel={handleCancelClick} />
      </div>
    </div>
  );
}
