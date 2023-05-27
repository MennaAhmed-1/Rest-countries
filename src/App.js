import HomePage from "./pages/HomePage";
import { createBrowserRouter } from "react-router-dom";
import CountryInfo from "./pages/CountryInfo";
import { RouterProvider } from "react-router-dom";

import { DarkModeContext } from "./context/DarkModeContext";
import classes from "./App.module.css";
import { useContext } from "react";
function App() {
  const { darkMode } = useContext(DarkModeContext);
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        { index: true, element: <HomePage /> },

        {
          path: ":code",
          element: <CountryInfo />,
        },
      ],
    },
  ]);

  return (
    <div
      className={darkMode ? classes["container-dark"] : classes["container"]}
    >
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
