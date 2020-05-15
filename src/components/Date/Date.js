import React,{useEffect, useState} from 'react';
import DateCard from "../DateCard/DateCard";

export default function Date({dates, list}) {
    return (
        <div>
            {dates.length
                ?
                dates.map((dateandtime, index)=>{
                    return (
                        <DateCard key = {index} dateandtime = {dateandtime} info = {list[index]} />
                    )
                })
                :
                null
            } 
        </div>
    )
}
