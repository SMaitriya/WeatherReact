import { useState } from "react";

export function Result({data}){
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    return (
    <>
    <div>{data.name}</div>
    <img src={iconUrl} alt={data.weather[0].description}/>

    <div>{data.main.temp}</div>
    <div>{data.weather[0].description}</div>
    <div>Humidity : {data.main.humidity}</div>
    <div> Max : {data.main.temp_max}</div>
    <div> Min : {data.main.temp_min}</div>
    </>

    )

}