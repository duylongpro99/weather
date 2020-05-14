import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from 'reactstrap';

export default function Long() {
    const [weather, setWeather] = useState({});
    
    useEffect(async () =>{
        let res = axios(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=28723b92f60d2ad265df38631d9e153c`)
        setWeather(res);
    });
    console.log(weather);
    return (
        <div>
            <h1>And i am Long</h1>
            <Button color="danger">Somthing will be here</Button>
        </div>
    )
}
