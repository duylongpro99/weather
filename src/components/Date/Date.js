import React,{useEffect, useState} from 'react';
import DateCard from "../DateCard/DateCard";
import styles from "./Date.module.css";

export default function Date({dates, list}) {
    let colors = ["#cc5555", "#fa8c32", "#fcff56", "#5dda15", "#7573fc", "#b022cc"];
    let colorList = [];
    let count = 0
    if(dates.length){
        for(let i = 0; i < dates.length; i++){
            if(i >= 1  && (dates[i].slice(0, 10) != dates[i-1].slice(0, 10))){
                count += 1;
            }
            colorList.push(colors[count]);
        }
    }
    return (
        <div className = {styles.cardlist}>
            {dates.length
                ?
                dates.map((dateandtime, index)=>{
                    return (
                        <DateCard key = {index} dateandtime = {dateandtime} info = {list[index]} color = {colorList[index]} />
                    )
                })
                :
                null
            } 
        </div>
    )
}
