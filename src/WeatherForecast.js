import  React  from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(params) {
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    Mon 
                    <WeatherIcon code="09n"/> 
                    19 10
                </div>
            </div>
        </div>
    );
}