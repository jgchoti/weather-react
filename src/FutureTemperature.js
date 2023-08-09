import React from "react";
import "./ForcastContainer.css"

export default function FutureTemperature(props) {
    function convertTemperature(temperature) {
        if (props.activeUnit === "imperial") {
            return Math.round(temperature * 9 / 5) + 32;
        } else { return Math.round(temperature); }

    }
    function generateTemperatureElement(day, index) {
        const maxTemp = convertTemperature(day.temp.max);
        const minTemp = convertTemperature(day.temp.min);
        return (
            <div className="FutureTemperature col" key={index}>
                <span className="MaxTemperature">{maxTemp}°</span>
                <span className="MinTemperature">{minTemp}°</span>
            </div>
        );
    }

    const temperatureElements = props.forecast.slice(1, 6).map(generateTemperatureElement);
    return <div className="row">{temperatureElements}</div>;
}





