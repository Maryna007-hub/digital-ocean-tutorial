import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props) {
    console.log(props.code);
    const codeMapping = {
        "01d": "CLEAR_DAY",
        "01n": "CLEAR_NIGHT"
    }
 return (
    <ReactAnimatedWeather
    icon={codeMapping[props.code]}
    color='darkblue'
    size={64}
    animate={true}
  />
 );
} 