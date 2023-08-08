import React, { useState } from "react";

export default function Temperature(props) {
    const [activeUnit, setActiveUnit] = useState("metric");
    const temperatureF = Math.round(props.data * 9 / 5) + 32;

    function unitChange(event) {
        event.preventDefault();
        if (activeUnit === "metric") {
            setActiveUnit("imperial")
        } else {
            setActiveUnit("metric");

        }
    }
    let temperatureDisplay;
    if (activeUnit === "metric") {
        temperatureDisplay = (< div className="Temperature" >
            <span>{props.data}</span>
            <span className="ActiveUnit">°C</span>
            <span className="Divider">|</span>
            <a href="/" onClick={unitChange} className="InactiveUnit">
                °F
            </a>
        </div >
        )
    }
    else {
        temperatureDisplay = (<div className="Temperature">
            <span>{temperatureF}</span>
            <span className="ActiveUnit">°F</span>
            <span className="Divider">|</span>
            <a href="/" onClick={unitChange} className="InactiveUnit">
                °C
            </a>
        </div>)
    }

    return temperatureDisplay;
}
