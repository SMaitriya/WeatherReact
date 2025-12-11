import { useState } from "react";

export function Result({data}){
    return (
    <>
    <div>{data.name}</div>
    <div>{data.main.temp}</div>
    <div>{data.weather[0].description}</div>
    </>

    )

}