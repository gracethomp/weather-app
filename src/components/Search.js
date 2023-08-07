import searchIcon from "../assets/search.svg"

export default function Search({ placeholder }) {
  return (
    <div className="search">
      <img src={searchIcon} alt="search input icon" className="search-icon" />
      <input type="text" placeholder={placeholder} />
    </div>
  );
}
