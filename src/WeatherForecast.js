import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast() {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "df04a6426eb8c9305ebb65c9deb52f35";
 
  let longitude = 10.99;
  let latitude = 44.34;
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col-2">
                   <div className="WeatherForecast-day">Mon</div> 
                     <WeatherIcon code="09n" size={36} /> 
                      <div className="WeatherForecast-temperature">
                        <span className="WeatherForecast-temperature-max">
                         16°</span>
                        <span className="WeatherForecast-temperature-min">
                        5°</span>
                      </div>
                   </div>
            </div>
        </div>
    ); 
}

