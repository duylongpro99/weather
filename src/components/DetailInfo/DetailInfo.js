import React from 'react'
import { Collapse, Card, CardBody, CardText, Progress } from "reactstrap";
import styles  from "./DetailInfo.module.css";
export default function DetailInfo({detailInfo, isOpen}) {
    const {temp, humidity, windSpeed, windDeg} = detailInfo;
    return (
        <Collapse className = {styles.detailinfo} isOpen={isOpen}>
            <Card>
                <CardBody className = {styles.card}>
                    <label>Temperature: </label>
                    <CardText>{temp}</CardText>
                    <label>Humidity: </label>
                    <Progress value = {humidity} color = "dark" animated>{humidity}%</Progress>
                    <br />
                    <label>Wind Speed: </label>
                    <CardText>{windSpeed}</CardText>
                    <label>Wind degree: </label>
                    <CardText>{windDeg}</CardText>
                </CardBody>
            </Card>
        </Collapse>
    )
}
