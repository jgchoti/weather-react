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
    const groupedData = {};
    response.data.list.forEach(function (dayData) {
      const date = dayData.dt_txt.split(" ")[0];
      if (!groupedData[date]) {
        groupedData[date] = {
          maxTemp: dayData.main.temp_max,
          minTemp: dayData.main.temp_min,
          icon: dayData.weather[0].icon,
        };
      } else {
        if (dayData.main.temp_max > groupedData[date].maxTemp) {
          groupedData[date].maxTemp = dayData.main.temp_max;
        }
        if (dayData.main.temp_min < groupedData[date].minTemp) {
          groupedData[date].minTemp = dayData.main.temp_min;
        }
      }
    });

    const forecastData = Object.values(groupedData).slice(0, 6);
    console.log(forecastData);
    setForecast(forecastData);
  }

  useEffect(() => {
    fetchForecastData();
  }, []);

  function fetchForecastData() {
    const lon = props.data.lon;
    const lat = props.data.lat;
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
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
