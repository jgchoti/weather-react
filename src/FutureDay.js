import React from "react";
import "./ForcastContainer.css";

export default function FutureDay(props) {
    const date = new Date(props.currentDate);
    const day = date.getDay();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const dayElements = [];
    for (let index = 0; index < 5; index++) {
        const dayIndex = (day + index + 1) % 7;
        dayElements.push(
            <div className="FutureDay col" key={dayIndex}>
                {days[dayIndex]}
            </div>
        );
    }

    return <div className="row">{dayElements}</div>;
}
