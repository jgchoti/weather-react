import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { API_KEY } from "./variables";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loadingLocation, setLoadingLocation] = useState(false);

  function handleError() {
    alert(
      `Cannot find a city named "${city}"❌ \n Please submit a valid city name. 🗺`
    );
    setCity("");
    setLoadingLocation(false);
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
  function fetchWeatherDataByLocation(latitude, longitude) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    axios.get(url).then(handleResponse).catch(handleError);
  }
  function handleUseLocationClick() {
    setLoadingLocation(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherDataByLocation(latitude, longitude);
      },
      (error) => {
        alert("Error getting your location.");
        setLoadingLocation(false);
      }
    );
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

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className=" row">
        <div className=" col-1">
          <button
            className="LocationButton"
            type="button"
            onClick={handleUseLocationClick}
            disabled={loadingLocation}
          >
            <span role="img" aria-label="location">📍</span>
          </button>
        </div>{" "}
        <div className="col-8">
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
        <div className="col-3 .SearchButtonWrapper">
          <button type="button" onClick={handleSubmit} className="SearchButton">
            Search
          </button>
        </div>
      </div>

      {weather.showWeather && <WeatherInfo data={weather} />}
    </div>
  );
}
