import classes from "./SearchComp.module.css";
import { useState, useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
function SearchComp({ onSearch }) {
  const [query, setQuery] = useState("");
  const { darkMode } = useContext(DarkModeContext);
  const searchHandler = (e) => {
    e.preventDefault();
    onSearch(query);
  };
  return (
    <form onSubmit={searchHandler}>
      <input
        className={darkMode ? classes["search-dark"] : classes["search"]}
        placeholder="Search for a country..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchComp;
