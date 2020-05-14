import React, {useState, useEffect} from 'react'
import axios from "axios";
import { fetchData } from "../../fetchdata";

export default function Home() {
    const [data, setData] = useState({});
    
    useEffect(() =>{
        const  getAPI = async () =>{
            setData(await fetchData());
        }
        getAPI();
    }, []);

    console.log(data)
    const inform = (data.cnt?
        (
            <div>
                <h1>{data.city.name}</h1>
                <div>Latitude: {data.city.coord.lat}</div>
                <div>Longitude: {data.city.coord.lon}</div>
            </div>
        )
        :
        null    
    );
    return(
        <div>
            {inform}
        </div>
    )
}
