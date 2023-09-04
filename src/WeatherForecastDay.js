import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherforecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.main.temp_max);
        return `${temperature}°`;
    }
    function minTemperature() {
        let temperature = Math.round(props.data.main.temp_min);
        return `${temperature}°`;
    }
    return (
        <div>
             <div className="Weatherforecast-day">{props.data.dt}</div> 
                   <WeatherIcon code={props.data.weather[0].icon} size={36} /> 
                    <div className="Weatherforecast-temperature">
                      <span className="Weatherforecast-temperature-max">
                       {maxTemperature()}°</span>
                      <span className="Weatherforecast-temperature-min">
                      {minTemperature}°</span>
                    </div>
        </div>
    );
}