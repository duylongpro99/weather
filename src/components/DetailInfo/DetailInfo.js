import React from 'react'
import { Collapse, Card, CardBody, CardText, Progress } from "reactstrap";
export default function DetailInfo({detailInfo, isOpen}) {
    const {temp, humidity, windSpeed, windDeg} = detailInfo;
    return (
        <Collapse isOpen={isOpen}>
            <Card>
                <CardBody>
                    <label>Temperature: </label>
                    <CardText>{temp}</CardText>
                    <label>Humidity: </label>
                    <Progress value = {humidity} color = "primary" animated>{humidity}%</Progress>
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
