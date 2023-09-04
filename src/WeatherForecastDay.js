import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function WeatherforecastDay(forecast) {
    return (
        <div>
             <div className="Weatherforecast-day">{forecast[0].dt}</div> 
                   <WeatherIcon code={forecast[0].weather[0].icon} size={36} /> 
                    <div className="Weatherforecast-temperature">
                      <span className="Weatherforecast-temperature-max">
                       {forecast[0].main.temp_max}°</span>
                      <span className="Weatherforecast-temperature-min">
                      {forecast[0].main.temp_max}°</span>
                    </div>
        </div>
    );
}