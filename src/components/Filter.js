import classes from "./Filter.module.css";
import { DarkModeContext } from "../context/DarkModeContext";
import { useContext } from "react";

const Filter = ({ onSelect }) => {
  const { darkMode } = useContext(DarkModeContext);
  function filterHandler(e) {
    const region = e.target.value;
    onSelect(region);
  }
  return (
    <select
      onChange={filterHandler}
      className={darkMode ? classes["filter-dark"] : classes["filter"]}
    >
      <option hidden className="option ">
        Filter by Region
      </option>
      <option className="option" value="Africa">
        Africa
      </option>
      <option className="option" value="Americas">
        Americas
      </option>
      <option className="option" value="Asia">
        Asia
      </option>
      <option className="option" value="Europe">
        Europe
      </option>
      <option className="option" value="Oceania">
        Oceania
      </option>
    </select>
  );
};

export default Filter;
