import classes from "./Header.module.css";
import { HiOutlineMoon } from "react-icons/hi";
import { DarkModeContext } from "../context/DarkModeContext";
import { useContext } from "react";
function Header() {
  const { darkMode, switchDarkMode } = useContext(DarkModeContext);

  function handleClick() {
    switchDarkMode();
  }
  return (
    <>
      <div className={darkMode ? classes["header-dark"] : null}>
        <div className={classes.header}>
          <div className={classes.head}>Where in the world?</div>
          <div className={darkMode ? classes["icon-dark"] : null}>
            <p className={classes.icon} onClick={handleClick}>
              <HiOutlineMoon />
              Dark Mode
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
