import React, {useState, useEffect, useRef} from 'react'
import { fetchData, getDateAPI } from "../../fetchdata";
import {Button, Spinner, Badge, UncontrolledCollapse, Card, CardBody} from "reactstrap";
import styles from "./Home.module.css";

import Date from "../Date/Date";

export default function Home() {
    const [data, setData] = useState({});
    const [dates, setDates] = useState("");

    useEffect(() =>{
        const  getAPI = async () =>{
            setData(await fetchData());
        }
        getAPI();
    }, []);
    useEffect(()=>{
        const getDateList = async () =>{
            setDates(await getDateAPI());
        }
        getDateList();
    },[])
    const inform = (data.cnt?
        (
            <div className = {styles.backgroundcolor}>
                <div className = {styles.headername}>
                    <Spinner color="danger" type="grow"/>
                    <Spinner color="success" type="grow"/>
                    <Spinner color="info" type="grow"/>
                    <h1>{data.city.name}</h1>
                    <Spinner color="secondary" type="grow"/>
                    <Spinner color="light" type="grow"/>
                    <Spinner color="warning" type="grow"/>
                </div>
                <Button className = {styles.position} color="info" id="toggler" style={{ marginBottom: '1rem' }}>
                    Position
                </Button>
                <UncontrolledCollapse toggler="#toggler">
                    <Card className = {styles.uncontrolledCollapse}>
                        <CardBody className = {styles.coordinate}>
                            <Badge color="danger">Latitude: {data.city.coord.lat}</Badge>
                            <Badge color= "primary">Longitude: {data.city.coord.lon}</Badge>
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
                <Date dates = {dates} list = {data.list} />
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
