import React, { useState } from "react";
import axios from 'axios';
import WeatherInfo from "./WeatherInfo";

import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";



export default function App() {
  const API_KEY = "0771d4347f81db89f7bfdf565868d867";
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [showWeather, setShowWeather] = useState(false);


  function handleError() {
    alert(
      `Cannot find a city named "${city}"❌ \n Please submit a valid city name. 🗺`
    );
    setCity("");
    setShowWeather(false);
  }

  function handleResponse(response) {
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      city: response.data.name
    });
    setShowWeather(true);
  }

  function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    axios
      .get(url)
      .then(handleResponse)
      .catch(handleError);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const trimmedCity = city.trim();
    if (trimmedCity.length > 0) {
      fetchWeatherData(trimmedCity);
    } else {
      alert("Please enter a city name so I can tell you the weather 🌞");
      setCity("");
    }
  }



  function updateCity(event) {
    setCity(event.target.value);
  }

  let header = <h1>Weather App</h1>;
  let form = (
    <div className="container">
      <div className=" row">
        <div className="col-9">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city name..."
              aria-label="Search"
              autoComplete="off"
              autoFocus={true}
              onChange={updateCity}
              className="form-control"
            />
          </form>
        </div>
        <div className="col-3">
          <button type="submit" onClick={handleSubmit}>
            Search
          </button>
        </div>
      </div>
    </div>
  );

  if (showWeather) {
    return (
      <div className="App">
        {header}
        {form}
        <WeatherInfo data={weather} />
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
