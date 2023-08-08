import React, { useState } from "react";
import formattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import ForcastContainer from "./ForcastContainer";

export default function WeatherInfo(props) {
  const [activeUnit, setActiveUnit] = useState("metric");

  function unitChange(event) {
    event.preventDefault();
    if (activeUnit === "metric") {
      setActiveUnit("imperial");
    } else {
      setActiveUnit("metric");
    }
  }
  return (
    <div className="WeatherInfo">
      <h2>{props.data.city}</h2>
      <div className="SubHeading">
        <ul>
          <li>{formattedDate(props.data.date)}</li>
          <li>{props.data.description}</li>
        </ul>
      </div>
      <div className="Result row">
        <div className="TemperatureContainer col-sm-6">
          <WeatherIcon icon={props.data.icon} />
          {"  "}
          <Temperature data={props.data.temperature} activeUnit={activeUnit} unitChange={unitChange} />
        </div>
        <div className="DescriptionContainer col-sm-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>

        <ForcastContainer
          key={props.data.lat + props.data.lon}
          data={props.data}
          activeUnit={activeUnit}
          unitChange={unitChange}
        />
      </div>
    </div>
  );
}
