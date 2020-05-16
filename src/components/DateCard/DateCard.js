import React, {useState} from 'react'
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import styles from "./DateCard.module.css";
import DetailInfo from "../DetailInfo/DetailInfo";

export default function DateCard({dateandtime, info}) {
    const [isOpen, setIsOpen] = useState(false);

    let description = info.weather[0].description;
    const temp = (parseFloat(info.main.temp) - 32)*(5/9);
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

    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>{dateandtime}</CardTitle>
                    <CardText className={styles.text_description}>{description}</CardText>
                    <Button color="success" onClick = {Toggle}>Detail for this weather</Button>
                    <DetailInfo detailInfo = {detailInfo} isOpen = {isOpen} />
                </CardBody>
            </Card>
        </div>
    )
}
