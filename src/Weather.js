import React from "react";
import "./Weather.css";
export default function Weather() {
    
return (<div className="Weather"> 
<h1> Lisbon</h1>
<ul>
    <li>
        Monday 20:00
    </li>
    <li>
        Clear
    </li>
</ul>
<div className="row">
 <div className="col-6">
    <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="Clear"/>
    6°C  °F
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
}