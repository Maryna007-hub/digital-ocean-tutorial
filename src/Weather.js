import React, { useState } from "react";
import "./Weather.css";
import  axios  from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {
    
       setWeatherData({
         temperature: response.data.main.temp,
         city: response.data.name,
         wind: response.data.wind.sped,
         humidity: response.data.main.humidity,
         description: response.data.weather[0].description,
         iconUrl: "https://openweathermap.org/img/wn/10d@2x.png",
         date: "Monday 23:34",
         ready: true,
         })
    }

    if (weatherData.ready) {
        return (
            <div className="Weather"> 
            <form>
            <div className="row">
                <div className="col-9">
                    <input type="search" placeholder="Enter a city..." className="form-control"/>
                </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary w-100"/>
                </div>
            </div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li>
                    {weatherData.date}
                </li>
                <li className="text-capitalize">
                    {weatherData.description}
                </li>
            </ul>
            <div className="row mt-3">
             <div className="col-6">
                <div className="clearfix">
                <img src={weatherData.iconUrl}
                alt={weatherData.description} className="float-left"/>
                <div className="float-left">
                    <span className="temperature">{Math.round(weatherData.temperature)}</span>
                    <span className="unit">°C  °F</span>
                
                </div>
             </div>
             </div>
             <div className="col-6">
             <ul>
                <li>
                Humidity: {weatherData.humidity}%
                </li>
                <li>
                Wind: {weatherData.wind} km/h
                </li>
            </ul>
             </div>
            </div>
            </div>
             );  
    } else {
        const apiKey = "df04a6426eb8c9305ebb65c9deb52f35";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
        ${props.defaultCity}&units=metric&appid=${apiKey}`;
        axios.get(apiUrl).then(handleResponse); 
        return "Loading...";
        }
}