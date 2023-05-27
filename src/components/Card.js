import classes from "./Card.module.css";
import { DarkModeContext } from "../context/DarkModeContext";
import { useContext } from "react";
function Card(props) {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? classes["card-dark"] : classes["card"]}>
      <div>
        <img src={props.flags} className={classes.img} />
      </div>
      <li>
        <strong>{props.name} </strong>
      </li>
      <li>
        <strong>Population:</strong>
        {props.population}
      </li>
      <li>
        <strong>Region: </strong>
        {props.region}
      </li>
      <li>
        <strong>Capital: </strong>
        {props.capital}
      </li>
    </div>
  );
}

export default Card;
