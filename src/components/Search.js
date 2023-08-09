import searchIcon from "../assets/search.svg";
import { useState } from "react";

export default function Search({ placeholder, onSearch}) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    onSearch(e.target.value);
    setSearchText(e.target.value);
  };

  return (
    <div className="search">
      <img src={searchIcon} alt="search input icon" className="search-icon" />
      <input
        type="text"
        placeholder={placeholder}
        value={searchText}
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
}
