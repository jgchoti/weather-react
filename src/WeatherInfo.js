import React from "react";
import FormattedDate from "./FormattedDate"
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (<div className="WeatherInfo">
        <h2>
            {props.data.city}
        </h2>
        <div className="SubHeading">
            <ul>
                <li>
                    <FormattedDate date={props.data.date} /></li>
                <li>
                    {props.data.description}</li>
            </ul>
        </div>
        <div className="Result row">
            <div className="Temperature col-sm-6">
                <WeatherIcon icon={props.data.icon} />{"  "}
                {props.data.temperature}
                <span className="Unit">°C</span>

            </div>
            <div className="Description col-sm-6">
                <ul>
                    <li>Humidity: {props.data.humidity}%</li>
                    <li>Wind: {props.data.wind} km/h</li>
                </ul>
            </div>
        </div>
    </div>)
}