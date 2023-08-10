import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { API_KEY } from "./variables";

export default function App() {
  const [city, setCity] = useState("antwerp");
  const [weather, setWeather] = useState({});

  function handleError() {
    alert(
      `Cannot find a city named "${city}"❌ \n Please submit a valid city name. 🗺`
    );
    setCity("");
    setWeather({});
  }

  function handleResponse(response) {
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
      showWeather: true, // Set showWeather to true here
    });
  }

  function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    axios.get(url).then(handleResponse).catch(handleError);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const trimmedCity = city.trim();
    if (trimmedCity.length > 0) {
      fetchWeatherData(trimmedCity);
    } else {
      alert("Please enter a city name so I can tell you the weather 🌞");
      setCity("");
      setWeather({});
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  console.log("rerender");

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className=" row">
        <div className="col-9">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city name..."
              aria-label="Search"
              autoComplete="off"
              autoFocus={true}
              value={city}
              onChange={updateCity}
              className="form-control"
            />
          </form>
        </div>
        <div className="col-3">
          <button type="button" onClick={handleSubmit} className="SearchButton">
            Search
          </button>
        </div>
      </div>
      {weather.showWeather && <WeatherInfo data={weather} />}
    </div>
  );
}
