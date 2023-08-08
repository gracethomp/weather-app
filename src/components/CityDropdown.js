import { useState } from "react";

export default function Dropdown() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <label for="city" className="field-title">
        <span className="required-field-symbol">*</span> City
      </label>
      <select value={selectedOption}
        onChange={handleOptionChange}
        className={"form-select " + (selectedOption !== '' ? 'selected' : '')} aria-label="dropdown-example">
        <option className="default-option" value="" disabled selected>
          Please Select a city
        </option>
        <option value="Berlin">Berlin</option>
        <option value="Barcelona">Barcelona</option>
        <option value="Tokyo">Tokyo</option>
      </select>
    </>
  );
}
