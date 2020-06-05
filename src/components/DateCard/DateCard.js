import React, {useState, useRef} from 'react'
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import styles from "./DateCard.module.css";
import DetailInfo from "../DetailInfo/DetailInfo";
import styled from "styled-components";

export default function DateCard({dateandtime, info, color}) {
    const [isOpen, setIsOpen] = useState(false);
    // let active = useRef(null);

    let description = info.weather[0].description;
    const temp = parseFloat(info.main.temp);
    const humidity = parseFloat(info.main.humidity);
    const windSpeed = parseFloat(info.wind.speed);
    const windDeg = parseFloat(info.wind.deg);

    const detailInfo = {
        temp : temp,
        humidity: humidity,
        windSpeed: windSpeed,
        windDeg: windDeg
    }

    const Toggle = () => {
        return setIsOpen(!isOpen);
    }
    const styleObject = {
        backgroundColor: color,
        color: "black"
    }
    return (
        <div className = {styles.datecard}>
            <Card className= {styles.card}>
                <CardBody style = {styleObject}>
                    <CardTitle className= {styles.text_title}>{dateandtime}</CardTitle>
                    <CardText className={styles.text_description}>{description}</CardText>
                    <Button className = {styles.buttoncard} color="success" onClick = {Toggle}>Detail weather</Button>
                    <DetailInfo color = {color} detailInfo = {detailInfo} isOpen = {isOpen} toggle = {Toggle} />
                </CardBody>
            </Card>
        </div>
    )
}