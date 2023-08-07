import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props) {

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
    }
    const defaults = {
        color: '#976DF3',
        size: 55,
        animate: true
    };

    if (props.icon.endsWith("n")) {
        return <ReactAnimatedWeather
            icon={codeMapping[props.icon]}
            color={"grey"}
            size={defaults.size}
            animate={defaults.animate}
        />
    } else {
        return <ReactAnimatedWeather
            icon={codeMapping[props.icon]}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
        />
    }

}

