import React, {useState, useEffect} from 'react'
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

    console.log(data)
    const inform = (data.cnt?
        (
            <div>
                <Spinner color="danger" type="grow"/>
                <Badge color="info" pill>{data.city.name}</Badge>
                <br />
                <Button color="info" id="toggler" style={{ marginBottom: '1rem' }}>
                    Position
                </Button>
                <UncontrolledCollapse toggler="#toggler">
                    <Card>
                        <CardBody>
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
