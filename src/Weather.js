import React, { useState } from "react";
import  FormattedDate  from "./FormattedDate";
import  WeatherInfo  from "./WeatherInfo";
import "./Weather.css";
import  axios  from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {
    
       setWeatherData({
         temperature: response.data.main.temp,
         city: response.data.name,
         humidity: response.data.main.humidity,
         description: response.data.weather[0].description,
         wind: response.data.wind.speed,
         iconUrl: "https://openweathermap.org/img/wn/10d@2x.png",
         date: new Date(response.data.dt * 1000),
         ready: true,
         })
    }

    if (weatherData.ready) {
        return (
            <div className="Weather"> 
            <form>
            <div className="row">
                <div className="col-9">
                    <input type="search" placeholder="Enter a city..." 
                    className="form-control"/>
                </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary w-100"/>
                </div>
            </div>
            </form>
            <WeatherInfo/>
           
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