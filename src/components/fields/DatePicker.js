import { useState } from "react";
import { getMinMaxDays } from "../../utils/minMaxDate";

export default function DatePicker({ labelText, id, date, handleChange }) {
  const [currentType, setCurrentType] = useState("text");
  const { minDate, maxDate } = getMinMaxDays();

  const handleInputClick = () => {
    setCurrentType("date");
  };

  return (
    <>
      <label for={id} className="field-title">
        <span className="required-field-symbol">*</span> {labelText}
      </label>
      <input
        placeholder="Select date"
        type={currentType}
        id={id}
        value={date}
        name="trip-start"
        min={minDate}
        max={maxDate}
        className="date-input form-select"
        onClick={handleInputClick}
        onChange={handleChange}
      />
    </>
  );
}
