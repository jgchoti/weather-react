import React from "react";
import "./ForcastContainer.css"

export default function FutureDay(props) {
    const date = new Date(props.currentDate);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    function generateDayElement(day, index) {
        const dayIndex = (date.getDay() + index + 1) % 7;
        return <div className="FutureDay col" key={dayIndex}>{days[dayIndex]}</div>;
    }

    const dayElements = Array.from({ length: 5 }).map(generateDayElement);
    return <div className="row">{dayElements}</div>;
}


