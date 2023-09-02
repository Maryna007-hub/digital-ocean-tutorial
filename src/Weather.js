import React, { useState } from "react";
import "./Weather.css";
import  axios  from "axios";

export default function Weather() {
    const [ready, setReady] = useState(false);
    const [temoerature, setTempetature] = useState(null);
    function handleResponse(response) {
        console.log(response.data);
        setTemperature(response.data.main.temp);
    }

    if (ready) {
        return (
            <div className="Weather"> 
            <form>
            <div className="row">
                <div className="col-9">
                    <input type="search" placeholder="Enter a city..." className="form-control"/>
                </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary"/>
                </div>
            </div>
            </form>
            <h1> Lisbon</h1>
            <ul>
                <li>
                    Monday 20:00
                </li>
                <li>
                    Clear
                </li>
            </ul>
            <div className="row mt-3">
             <div className="col-6">
                <div className="clearfix">
                <img src="https://openweathermap.org/img/wn/10d@2x.png" 
                alt="Clear" className="float-left"/>
                <div className="float-left">
                    <span className="temperature">{temoerature}</span>
                    <span className="unit">°C  °F</span>
                
                </div>
             </div>
             </div>
             <div className="col-6">
             <ul>
                <li>
                Humidity: 62%
                </li>
                <li>
                Wind: 11 km/h
                </li>
            </ul>
             </div>
            </div>
            </div>
             );  
    } else {
        const apiKey = "df04a6426eb8c9305ebb65c9deb52f35";
        let city = "Lisbon";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
        ${city}&units=metric&appid=${apiKey}`;
        axios.get(apiUrl).then(handleResponse); 
        return "Loading...";
        }
}