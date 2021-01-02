import React, { useEffect } from 'react'
import { Card,} from "react-bootstrap";
import Foto from  '../devs_pics/man1.jpg'
import CardNavigation from '../components/devProfile/cardNavigation'
import {  useDispatch } from "react-redux";
import './devProfile.css'
import axios from 'axios'

export default (props) => {

    const dispatch = useDispatch();
    const query = new URLSearchParams(props.location.search);
    const token = query.get("id");
    const api = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com/users",
    });

    async function getDevs() {
        const response = await api.get("");
        console.log(`teste${response.data}`)
        dispatch({ type: "GET_DEVS", devs: response.data });
    }

    useEffect(() => {
        getDevs();
        dispatch({type: 'GET_DEVID', id: token})
        
    })

    return (
        <Card id='cardProfile'>
            <Card.Img variant="top" id='picProfile' src={Foto} />
            <Card.Body>
                {token}
                <CardNavigation></CardNavigation>
            </Card.Body>
        </Card>
    );
}