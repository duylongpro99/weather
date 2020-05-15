import React from 'react'
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'

export default function DateCard({dateandtime, info}) {
    let description = info.weather[0].description;
    console.log(description); 
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>{dateandtime}</CardTitle>
                    <CardText>{description}</CardText>
                    <Button color="danger">Button</Button>
                </CardBody>
            </Card>
        </div>
    )
}
