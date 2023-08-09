export default function Dropdown({
  cities,
  selectedOption,
  handleOptionChange,
}) {
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
          <option key={city.id} value={city.city}>
            {city.city}
          </option>
        ))}
      </select>
    </>
  );
}
