import React from "react";

const Display = ({ weather }) => {
  let clearness;

  if (weather.weather && weather.weather[0].main === "Thunderstorm") {
    clearness = " stormy";
  } else if (weather.weather && weather.weather[0].main === "Clear") {
    clearness += " sunny";
  }

  let icon;

  switch (weather.weather && weather.weather[0].main) {
    case "Thunderstorm":
      icon = "rain-cloud-white.svg";
      break;
    case "Drizzle":
      icon = "rain-cloud-white.svg";
      break;
    case "Rain":
      icon = "rain-cloud-white.svg";
      break;
    case "Snow":
      icon = "snowflake-complex-white.svg";
      break;
    case "Atmosphere":
      icon = "single-cloud-white.svg";
      break;
    case "Clear":
      icon = "hot-sun-white.svg";
      break;
    case "Clouds":
      icon = "sun-behind-cloud-white.svg";
      break;
    default:
      icon = "shiny-sun-white.svg";
  }

  return (
    <div>
      {typeof weather.main != "undefined" ? (
        <div>
          <div className="location-container">
            <div className="date"> {new Date().toUTCString().slice(0, 12)}</div>

            <div className="location">{weather.name}</div>
          </div>
          <div className="weather-container">
            <div>
              <img className="weather-icon" src={`/images/${icon}`} />
            </div>

            <div className="temperature">{Math.round(weather.main.temp)}°F</div>

            <div className="weather">
              {weather.weather[0].description.toUpperCase()}
            </div>
            <div className="high-low">
              <div className="low">
                Low: {Math.round(weather.main.temp_min)}°F
              </div>
              <div className="high">
                High: {Math.round(weather.main.temp_max)}°F
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Display;
