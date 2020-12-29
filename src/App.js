import React, { useState, useEffect } from "react";
import Display from "./Display.js";
import keys from "./keys.js";
import "./App.css";

const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
};

const App = () => {
  const [zipcode, setZipcode] = useState("");
  const [weather, setWeather] = useState({});
  const [hourlyForecast, setHourlyForecast] = useState({});

  const searchZip = async (event) => {
    if (event.key === "Enter") {
      await fetch(
        `${api.base}weather?zip=${zipcode}&units=imperial&appid=${api.key}`
      )
        .then((res) => res.json())
        .then((result) => {
          console.log(result);

          setWeather(result);
        });
    }
  };

  const fetchHourly = async () => {
    await fetch(
      `${api.base}forecast?zip=${zipcode}&units=imperial&appid=${api.key}`
    )
      .then((res) => res.json())
      .then((result) => {
        setHourlyForecast(result);
      });
  };

  let light = new Date().toLocaleTimeString().slice(0, 1) < 15 ? "" : " night";

  useEffect(() => {
    fetchHourly();
  }, [weather]);

  return (
    <div className={`App` + light}>
      <main>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search a zipcode..."
            className="search-bar"
            onChange={(e) => setZipcode(e.target.value)}
            value={zipcode}
            onKeyPress={searchZip}
          />
        </div>
        {/* INPUT FIELD FOR OUR ZIP CODE*/}

        <Display
          weather={weather}
          hourlyForecast={hourlyForecast}
          light={light}
        />
      </main>
    </div>
  );
};

export default App;
