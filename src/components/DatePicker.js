import { useState } from "react";

export default function DatePicker({ labelText, id }) {
  const [currentType, setCurrentType] = useState("text");

  const handleInputClick = () => {
    setCurrentType("date");
  }

  return (
    <>
      <label for={id} className="field-title">
        <span className="required-field-symbol">*</span> {labelText}
      </label>
      <input
        placeholder="Select date"
        type={currentType}
        id={id}
        name="trip-start"
        min="2023-01-01"
        max="2023-01-15"
        className="date-input form-select"
        onClick={handleInputClick}
      />
    </>
  );
}
