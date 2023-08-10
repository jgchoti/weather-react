import React, { useState, useEffect } from "react";
import axios from "axios";
import FutureDay from "./FutureDay";
import FutureIcon from "./FutureIcon";
import FutureTemperature from "./FutureTemperature";
import "./ForcastContainer.css";
import { API_KEY } from "./variables";

export default function ForcastContainer(props) {
  const [forecast, setForecast] = useState([]);
  function handleError() {
    return "Loading...";
  }

  function handleResponse(response) {
    console.log(response.data.daily);
    setForecast(response.data.daily);
  }

  useEffect(() => {
    fetchForecastData();
  }, [props.data.lon + props.data.lat]);

  function fetchForecastData() {
    const lon = props.data.lon;
    const lat = props.data.lat;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    axios.get(apiUrl).then(handleResponse).catch(handleError);
  }

  return (
    <div className="FutureContainer">
      <FutureDay currentDate={props.data.date} />
      <FutureIcon forecast={forecast} />
      <FutureTemperature forecast={forecast} activeUnit={props.activeUnit} />
    </div>
  );
}
