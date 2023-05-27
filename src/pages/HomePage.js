import { useEffect, useState, useContext } from "react";
import classes from "./HomePage.module.css";
import Card from "../components/Card";
import Filter from "../components/Filter";
import SearchComp from "../components/SearchComp";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { DarkModeContext } from "../context/DarkModeContext";
function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const { darkMode } = useContext(DarkModeContext);

  const fetchCountriesHandler = async () => {
    setIsLoading(true);
    const response = await fetch("https://restcountries.com/v2/all");

    const data = await response.json();

    console.log(data);
    setCountries(data);
    setIsLoading(false);
  };

  const getCountryByCountryName = async (countryName) => {
    setIsLoading(true);
    const response = await fetch(
      `https://restcountries.com/v2/name/${countryName}`
    );

    const data = await response.json();
    setCountries(data);
    setIsLoading(false);
  };

  const getCountryByRegion = async (regionName) => {
    setIsLoading(true);
    const response = await fetch(
      `https://restcountries.com/v2/region/${regionName}`
    );

    const data = await response.json();
    setCountries(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCountriesHandler();
  }, []);

  return (
    <div className={darkMode ? classes["bigContainer-dark"] : null}>
      <Header />
      <div className={classes.heading}>
        <SearchComp onSearch={getCountryByCountryName} />
        <Filter onSelect={getCountryByRegion} />
      </div>
      <div className={classes.bigContainer}>
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          countries &&
          countries.map((country) => (
            <Link className={classes.links} to={`/${country.alpha3Code}`}>
              <Card
                flags={country.flag}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
export default HomePage;
