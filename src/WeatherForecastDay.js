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
    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }
    return (
        <div>
             <div className="Weatherforecast-day">{day()}</div> 
                   <WeatherIcon code={props.data.weather[0].icon} size={36} /> 
                    <div className="WeatherForecast-temperature">
                      <span className="Weatherforecast-temperature-max">
                       {maxTemperature()}</span>
                      <span className="WeatherForecast-temperature-min">
                      {minTemperature()}</span>
                    </div>
        </div>
    );
}