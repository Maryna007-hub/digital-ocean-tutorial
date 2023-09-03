import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
let apiKey = "df04a6426eb8c9305ebb65c9deb52f35";
let apiUrl = `https://api.openweathermap.org/data/2.5/
onecall?lat={lat}&lon={lon}&exclude={part}&appid=${apiKey}`

    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col-2">
                   <div className="WeatherForecast-day">Mon</div> 
                     <WeatherIcon code="09n" size={36} /> 
                      <div className="WeatherForecast-temperature">
                        <span className="WeatherForecast-temperature-max">19</span>
                        <span className="WeatherForecast-temperature-min">11</span>
                      </div>
                   </div>
            </div>
        </div>
    );
}