import React, { useState } from "react";
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

  const search = async (event) => {
    if (event.key === "Enter") {
      await fetch(
        `${api.base}weather?zip=${zipcode}&units=imperial&appid=${api.key}`
      )
        .then((res) => res.json())
        .then((result) => {
          setZipcode("");
          console.log(result);

          setWeather(result);
        });
    }
  };

  let light = new Date().toLocaleTimeString < 13 ? "" : " night";

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
            onKeyPress={search}
          />
        </div>
        {/* INPUT FIELD FOR OUR ZIP CODE*/}

        <Display weather={weather} />
      </main>
    </div>
  );
};

export default App;
