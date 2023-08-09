import { useSelector } from "react-redux";

export default function Dropdown({ selectedOption, handleOptionChange }) {
  const cities = useSelector((state) => state.cities);

  return (
    <>
      <label for="city" className="field-title">
        <span className="required-field-symbol">*</span> City
      </label>
      <select
        value={selectedOption}
        onChange={handleOptionChange}
        className={"form-select " + (selectedOption !== "" ? "selected" : "")}
        aria-label="dropdown-example"
      >
        <option className="default-option" value="" disabled selected>
          Please Select a city
        </option>
        {cities.map((city) => (
          <option key={city.id} value={city.city}>{city.city}</option>
        ))}
      </select>
    </>
  );
}
