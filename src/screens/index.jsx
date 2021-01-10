import React, { useEffect } from "react";
import Card from "../layouts/devCard";
import { CardDeck } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import devPics from '../redux/devsPics'
import "./index.css";
import axios from "axios";

export default function Index () {
    const devs = useSelector((state) => state.getDevs.devs);
    const dispatch = useDispatch();
    const api = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com/users",
    });

    useEffect( () => {
        async function getDevs() {
        const response = await api.get("");

        dispatch({ type: "GET_DEVS", devs: response.data });
    }
    getDevs()
}, []);

    function cards() {

        return devs.map((dev, idx) => {
            return (
                <Card
                    key={dev.id}
                    Foto={devPics[idx]}
                    userId={dev.id}
                    link={`devprofile?id=${dev.id}`}
                    id="card1"
                    name={dev.name}
                    email={dev.email}
                ></Card>
            );
        });
    }

    return (
        <div>
            <CardDeck id="cardDeck">
                {cards()}
            </CardDeck>
        </div>
    );
};
