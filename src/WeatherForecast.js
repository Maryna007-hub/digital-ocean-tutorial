import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
   let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
 setForecast(response.data.daily);
 setLoaded(true);
   }
   if (loaded) {
    
     return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col-2">
                   <div className="WeatherForecast-day">Mon</div> 
                     <WeatherIcon code="09n" size={36} /> 
                      <div className="WeatherForecast-temperature">
                        <span className="WeatherForecast-temperature-max">
                          {forecast[0].temp.max}°</span>
                        <span className="WeatherForecast-temperature-min">
                        5°</span>
                      </div>
                   </div>
            </div>
        </div>
    );
} else {
let apiKey = "df04a6426eb8c9305ebb65c9deb52f35";
let longitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?
lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

return null; 
}
}
  
