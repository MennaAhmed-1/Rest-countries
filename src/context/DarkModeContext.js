import { createContext, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider(props) {
  const [darkMode, setDarkMode] = useState(false);

  function switchDarkMode() {
    setDarkMode(!darkMode);
  }
  return (
    <div>
      <DarkModeContext.Provider value={{ darkMode, switchDarkMode }}>
        {props.children}
      </DarkModeContext.Provider>
    </div>
  );
}
export { DarkModeProvider, DarkModeContext };
