import React, { useState } from "react";
import  WeatherInfo  from "./WeatherInfo";
import  WeatherForecast  from "./WeatherForecast";
import "./Weather.css";
import  axios  from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {

       setWeatherData({
         temperature: response.data.main.temp,
         city: response.data.name,
         humidity: response.data.main.humidity,
         description: response.data.weather[0].description,
         wind: response.data.wind.speed,
         icon: response.data.weather[0].icon,
         date: new Date(response.data.dt * 1000),
         coordinates: response.data.coord,
         ready: true,
         })
         // console.log(response)
    }
    function search() {
        const apiKey = "df04a6426eb8c9305ebb65c9deb52f35";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
        ${city}&units=metric&appid=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);  
    }
function handleSubmit(event) {
    event.preventDefault();
    search();

}
function handleCityChange(event) {
    setCity(event.target.value);
}
    if (weatherData.ready) {
        return (
            <div className="Weather"> 
            <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
                    <input type="search" placeholder="Enter a city..." 
                    className="form-control"
                    autoFocus="on"
                    onChange={handleCityChange}/>
                </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary w-100"/>
                </div>
            </div>
            </form>
            <WeatherInfo data={weatherData}/>
            <WeatherForecast coordinates={weatherData.coordinates}/>
            </div>
             );  
    } else {
      search();
        return "Loading...";
        }
}