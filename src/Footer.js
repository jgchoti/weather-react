import React from "react";
import "./index.css"
import ChotiLogo from "./logo_choti.png"

export default function Footer() {
    return (<div className="Footer">
        <a href="https://github.com/jgchoti/weather-react" target="_blank" rel="noreferrer" > Open-Source Code </a>
        , by <a href="https://choti-portfolio.netlify.app/" target="_blank" rel="noreferrer" >
            <img src={ChotiLogo} alt="logo" className="logo" /></a></div>
    );
}
