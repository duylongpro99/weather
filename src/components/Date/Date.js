import React,{useEffect, useState} from 'react';
import {getDateAPI} from "../../fetchdata";
import DateCard from "../DateCard/DateCard";

export default function Date() {
    const [dates, setDates] = useState("");
    useEffect(()=>{
        const getDateList = async () =>{
            setDates(await getDateAPI());
        }
        getDateList();
    },[])
    console.log(dates)
    return (
        <div>
            {dates.length
                ?
                dates.map((dateandtime)=>{
                    return (
                        <DateCard dateandtime = {dateandtime} />
                    )
                })
                :
                null
            } 
        </div>
    )
}
