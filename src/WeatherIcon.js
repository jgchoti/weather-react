import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props) {
    // Mapping of weather icon codes to ReactAnimatedWeather icons
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

    // Default values for the weather icon display
    const defaults = {
        color: '#976DF3',
        size: 55,
        animate: true
    };

    // Determine whether it's day or night based on the icon code
    const isNightIcon = props.icon.endsWith("n");

    return (
        <ReactAnimatedWeather
            icon={codeMapping[props.icon]}
            color={isNightIcon ? "grey" : defaults.color}
            size={defaults.size}
            animate={defaults.animate}
        />
    );
}
