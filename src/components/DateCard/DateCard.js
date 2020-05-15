import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'

export default function DateCard({dateandtime}) {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src="" alt="Card image cap" />
                <CardBody>
                    <CardTitle>{dateandtime}</CardTitle>
                    <CardText></CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
    )
}
