import React, { useEffect } from "react";
import Card from "../layouts/devCard";
import { CardDeck } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import devPics from '../redux/devsPics'
import getDevsThunks from '../thunks/getDevsThunks'
import "./index.css";


export default function Index () {
    const devs = useSelector((state) => state.getDevs.devs);
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getDevsThunks());
}, []);

    function cards() {
        console.log(devs)
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
