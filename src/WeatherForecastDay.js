import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function WeatherpropsDay(props) {
    return (
        <div>
             <div className="Weatherprops-day">{props[0]}</div> 
                   <WeatherIcon code={props[0].weather[0].icon} size={36} /> 
                    <div className="Weatherprops-temperature">
                      <span className="Weatherprops-temperature-max">
                       {props[0].main.temp_max}°</span>
                      <span className="Weatherprops-temperature-min">
                      {props[0].main.temp_max}°</span>
                    </div>
        </div>
    );
}