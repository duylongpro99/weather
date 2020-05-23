import React from 'react'
import { Collapse, Card, CardBody, CardText, Progress, Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import styles  from "./DetailInfo.module.css";
export default function DetailInfo({detailInfo, isOpen, toggle, color}) {
    const {temp, humidity, windSpeed, windDeg} = detailInfo;
    const modalbody = {
        backgroundColor: color
    }
    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader className = {styles.modalheader} toggle={toggle}>Weather Detail</ModalHeader>
            <ModalBody style = {modalbody}>
                <label>Temperature: </label>
                <CardText>{temp}</CardText>
                <label>Humidity: </label>
                <Progress value = {humidity} color = "primary" animated>{humidity}%</Progress>
                <br />
                <label>Wind Speed: </label>
                <CardText>{windSpeed}</CardText>
                <label>Wind degree: </label>
                <CardText>{windDeg}</CardText>
            </ModalBody>
            <ModalFooter className = {styles.modalfooter}>
                <Button color="success" onClick={toggle}>Get it</Button>
            </ModalFooter>
        </Modal>
    )
}

