import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThermometerHalf,
  faWind,
  faTint,
  faCloud,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
const WeatherView = ({ input }) => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = process.env.REACT_APP_API_KEY;
  const formattedCity = input.charAt(0).toUpperCase() + input.slice(1); // Capitalize the first letter of the city name
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${formattedCity}&aqi=no`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Any cleanup code if needed
    };
  }, [apiUrl]);

  return (
    <>
      {weatherData ? (
        <p className="demographics">
          {weatherData.location.name}, {weatherData.location.country}
        </p>
      ) : (
        <p>Loading...</p>
      )}

      <div className="weather-view-container">
        {/* <h2>Current Weather Information for {formattedCity}</h2> */}
        {weatherData ? (
          <>
            <div className="box">
              <img
                className="current-icon"
                src={weatherData.current.condition.icon}
                alt="Weather Icon"
              />
              <div>
                <p className="condition-icon">
                  {weatherData.current.condition.text}
                </p>
              </div>
            </div>
            <div className="box">
              <FontAwesomeIcon icon={faThermometerHalf} />
              <div>
                <p className="big">{weatherData.current.temp_c}°C</p>
                <p className="small">{weatherData.current.temp_f}°F</p>
              </div>
            </div>
            <div className="box">
              <FontAwesomeIcon icon={faWind} />
              <div>
                <p>
                  <span className="big">{weatherData.current.wind_kph}</span>{" "}
                  kph
                </p>
                <p>
                  <span className="small">{weatherData.current.wind_mph}</span>{" "}
                  mph
                </p>
              </div>
            </div>
            <div className="box">
              <FontAwesomeIcon icon={faTint} />
              <div>
                <p className="heading">Humidity</p>
                <p className="value">{weatherData.current.humidity}%</p>
              </div>
            </div>
            <div className="box">
              <FontAwesomeIcon icon={faCloud} />
              <div>
                <p className="heading">Clouds</p>
                <p className="value">{weatherData.current.cloud}%</p>
              </div>
            </div>
            <div className="box">
              <FontAwesomeIcon icon={faSun} />
              <div>
                <p className="heading">UV</p>
                <p className="value">{weatherData.current.uv}</p>
              </div>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default WeatherView;
