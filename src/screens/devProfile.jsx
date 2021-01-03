import React, { useEffect } from 'react'
import { Card,} from "react-bootstrap";
import Foto from  '../devs_pics/dev1.jpg'
import CardNavigation from '../components/devProfile/cardNavigation'
import {  useDispatch, useSelector } from "react-redux";
import './devProfile.css'
import axios from 'axios'

export default (props) => {

    const dispatch = useDispatch();
    const query = new URLSearchParams(props.location.search);
    const token = query.get("id");
    const devPics = useSelector((state) => state.getDevs.devPics);
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
            <Card.Img variant="top" id='picProfile' src={devPics[token - 1]} />
            <Card.Body>
                <CardNavigation></CardNavigation>
            </Card.Body>
        </Card>
    );
}