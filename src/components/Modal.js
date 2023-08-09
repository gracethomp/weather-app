import { addTrip } from "../redux/actions/tripsActions";
import Dropdown from "./fields/CityDropdown";
import DatePicker from "./fields/DatePicker";
import ModalButtons from "./buttons/ModalButtons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Modal({ handleCancelClick, id, handleAdd }) {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities);
  const [selectedOption, setSelectedOption] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [warning, setWarning] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSaveTrip = () => {
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);
    if (date1 > date2) {
      setWarning("Wrong dates!");
    } else if (selectedOption && startDate && endDate) {
      const imageUrl = cities.find(
        (city) => city.city === selectedOption
      ).imageUrl;
      const newTrip = {
        id: id,
        city: selectedOption,
        startDate: startDate,
        endDate: endDate,
        imageUrl: imageUrl,
      };
      dispatch(addTrip(newTrip));
      handleAdd();
      handleCancelClick();
    } else {
      setWarning("Fill all fields!")
    }
  };

  return (
    <div className="modal" id="myModal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Create trip</h3>
          <p onClick={handleCancelClick}>&times;</p>
        </div>
        <div className="fields">
          <Dropdown
            cities={cities}
            selectedOption={selectedOption}
            handleOptionChange={handleOptionChange}
          />
          <DatePicker
            labelText="Start date:"
            id="start"
            date={startDate}
            handleChange={handleStartDateChange}
          />
          <DatePicker
            labelText="End date:"
            id="end"
            date={endDate}
            handleChange={handleEndDateChange}
          />
          {warning && <p className="warning">{warning}</p>}
        </div>
        <ModalButtons cancel={handleCancelClick} accept={handleSaveTrip} />
      </div>
    </div>
  );
}
