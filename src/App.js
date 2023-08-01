import React, { useState } from "react";
import axios from 'axios';
import "./index.css";

export default function App() {
  const [city, setCity] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [weather, setWeather] = useState({});
  const [showWeather, setShowWeather] = useState(false);

  function handleError() {
    alert(
      `Cannot find a city named "${city}"❌ \n Please submit a valid city name. 🗺`
    );
    setSubmitted("");
    setShowWeather(false);
  }

  function handleResponse(response) {
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon
    });
    setShowWeather(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city.length > 0) {
      setSubmitted(city.toUpperCase());
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0771d4347f81db89f7bfdf565868d867&units=metric`;
      axios.get(url).then(handleResponse).catch(handleError);
    } else {
      alert("Please enter a city name so I can tell you the weather 🌞");
      setSubmitted("");
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let header = <h1>Weather App</h1>;
  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city name..."
        aria-label="Search"
        autoComplete="off"
        onChange={updateCity}
      />
      <button className="searchButton" type="submit">
        Search
      </button>
    </form>
  );

  if (showWeather) {
    return (
      <div className="App">
        {header}
        <h2>
          <span role="img" aria-label="emoji">
            📍
          </span>{" "}
          {submitted}
        </h2>
        {form}
        <div className="Result">
          <div className="Temperature">
            <img
              src={`https://api.openweathermap.org/img/w/${weather.icon}.png`}
              alt="icon"
              className="icon"
            />
            {weather.temperature} °C

          </div>
          <div className="Description">
            <ul>
              <li>Description: {weather.description}</li>
              <li>Humidity: {weather.humidity} %</li>
              <li>Wind: {weather.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        {header}
        {form}
      </div>
    );
  }
}
