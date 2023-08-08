import React from "react";

export default function Temperature(props) {
    const temperatureC = props.data;
    const temperatureF = Math.round(props.data * 9 / 5) + 32;

    return (
        <div className="Temperature">
            <span>{props.activeUnit === "metric" ? temperatureC : temperatureF}</span>
            <span className="ActiveUnit">{props.activeUnit === "metric" ? "°C" : "°F"}</span>
            <span className="Divider">|</span>
            <a href="/" onClick={props.unitChange} className="InactiveUnit">
                {props.activeUnit === "metric" ? "°F" : "°C"}
            </a>
        </div>
    );
}
