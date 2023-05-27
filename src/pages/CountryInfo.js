import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import classes from "./CountryInfo.module.css";
import { DarkModeContext } from "../context/DarkModeContext";
import { useContext } from "react";
const CountryInfo = () => {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let navigate = useNavigate();
  const { code } = useParams();
  const { darkMode } = useContext(DarkModeContext);

  const getCountryByCountryName = async () => {
    setIsLoading(true);
    const response = await fetch(`https://restcountries.com/v2/alpha/${code}`);

    const data = await response.json();
    setCountry(data);
    setIsLoading(false);
    console.log(data);
  };

  useEffect(() => {
    getCountryByCountryName();
  }, [code]);

  let goBack = () => {
    navigate(-1);
  };

  return (
    <div className={classes.contain}>
      <div className={darkMode ? classes["contain-dark"] : null}>
        <Header />

        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          <div
            className={
              darkMode ? classes["container-dark"] : classes["container"]
            }
          >
            <div className={classes.btnFlag}>
              <div className={classes.btns}>
                <button
                  className={darkMode ? classes["btn-dark"] : classes["btn"]}
                >
                  <Link className={classes.link} to="/">
                    home
                  </Link>
                </button>

                <button
                  className={darkMode ? classes["btn-dark"] : classes["btn"]}
                  onClick={goBack}
                >
                  Go Back
                </button>
              </div>

              <img src={country.flag} className={classes.countryFlag} />
            </div>
            <div className={classes.info}>
              <div>
                <h2 className={classes.countryName}>{country.name} </h2>

                <p>
                  <strong>Native Name:</strong> {country.nativeName}
                </p>
                <p>
                  <strong>Population:</strong> {country.population}{" "}
                </p>
                <p>
                  <strong>Region:</strong> {country.region}
                </p>

                <p>
                  <strong>Sub Region:</strong> {country.subregion}
                </p>
                <p>
                  <strong>Capital:</strong> {country.capital}
                </p>

                {country.borders && (
                  <p>
                    <span>
                      <strong>Border Countries:</strong>{" "}
                    </span>
                    {country.borders.map((border, id) => (
                      <Link
                        className={
                          darkMode
                            ? classes["bordersLink-dark"]
                            : classes["bordersLink"]
                        }
                        to={`/${border}`}
                        key={id}
                      >
                        <span>{border}</span>
                      </Link>
                    ))}
                  </p>
                )}
              </div>
              <div className={classes.col2}>
                <p>
                  <strong>Top Level Domain:</strong> {country.topLevelDomain}
                </p>

                <p>
                  <strong>Currencies:</strong>{" "}
                  {country.currencies.map((curr) => curr.name)}
                </p>
                <p>
                  <strong>Languages:</strong>{" "}
                  {country.languages.map((lang) => lang.name + ", ")}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryInfo;
