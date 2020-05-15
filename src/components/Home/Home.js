import React, {useState, useEffect} from 'react'
import { fetchData } from "../../fetchdata";
import {Button, Spinner, Badge, UncontrolledCollapse, Card, CardBody} from "reactstrap";
import styles from "./Home.module.css";

import Date from "../Date/Date";

export default function Home() {
    const [data, setData] = useState({});
    
    useEffect(() =>{
        const  getAPI = async () =>{
            setData(await fetchData());
        }
        getAPI();
    }, []);

    console.log(data)
    const inform = (data.cnt?
        (
            <div>
                <Spinner color="success" />
                <Badge color="info" pill>{data.city.name}</Badge>
                <br />
                <Button color="info" id="toggler" style={{ marginBottom: '1rem' }}>
                    Toggle
                </Button>
                <UncontrolledCollapse toggler="#toggler">
                    <Card>
                        <CardBody>
                            <Badge color="danger">Latitude: {data.city.coord.lat}</Badge>
                            <Badge color= "primary">Longitude: {data.city.coord.lon}</Badge>
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
                <Date />
            </div>
        )
        :
        null    
    );
    return(
        <div>
            {inform}
        </div>
    )
}
