import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';
import "./ForcastContainer.css";

export default function FutureIcon(props) {

    const codeMapping = {
        "01d": "CLEAR_DAY",
        "01n": "CLEAR_NIGHT",
        "02d": "PARTLY_CLOUDY_DAY",
        "02n": "PARTLY_CLOUDY_NIGHT",
        "03d": "CLOUDY",
        "03n": "CLOUDY",
        "04d": "CLOUDY",
        "04n": "CLOUDY",
        "09d": "RAIN",
        "10d": "RAIN",
        "10n": "RAIN",
        "11d": "SLEET",
        "11n": "SLEET",
        "13d": "SNOW",
        "13n": "SNOW",
        "50d": "FOG",
        "50n": "FOG"
    };

    const defaults = {
        color: "lightblue",
        size: 45,
        animate: true,
    };

    function generateIconElement(day, index) {
        const iconIndex = day.weather[0].icon;
        return (
            <div className="FutureIcon col" key={index}>
                <ReactAnimatedWeather
                    icon={codeMapping[iconIndex]}
                    color={defaults.color}
                    size={defaults.size}
                    animate={defaults.animate}
                />
            </div>
        );
    }

    const iconElements = props.forecast.slice(1, 6).map(generateIconElement);
    return <div className="row">{iconElements}</div>;
}