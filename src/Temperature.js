import React, { useState } from "react";


export default function Unit(props) {
    const [activeUnit, setActiveUnit] = useState("°C");
    const [inactiveUnit, setInactiveUnit] = useState("°F");
    const [temperature, setTemperature] = useState(props.data)

    function unitChange(event) {
        event.preventDefault();
        if (activeUnit === "°C") {
            setTemperature(props.data)
            setActiveUnit("°F");
            setInactiveUnit("°C");
        } else {
            setTemperature(Math.round(props.data * 9 / 5) + 32)
            setActiveUnit("°C");
            setInactiveUnit("°F");
        }
    }


    return <div className="Temperature"><span>{temperature}</span>
        <span className="ActiveUnit">{activeUnit}</span>
        <span className="Divider">|</span>
        <a href="/" onClick={unitChange} className="InactiveUnit">{inactiveUnit}</a>
    </div>
}