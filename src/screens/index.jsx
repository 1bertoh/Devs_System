import React, { useEffect } from "react";
import Card from "../layouts/devCard";
import Foto from "../devs_pics/man1.jpg";
import { CardDeck } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import axios from "axios";

export default () => {
    const devs = useSelector((state) => state.getDevs.devs);
    const dispatch = useDispatch();
    const api = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com/users",
    });

    
    useEffect( async () => {
           const response = await api.get('')
        
           console.log(response.data)
           dispatch({ type: "GET_DEVS", devs: response.data });
    }, []);
    
    function cards() {
        console.log(devs)
        console.log(`esse é a data tamanho ${devs.length}`)

        return devs.map((dev) => {
            return (
                <Card
                    key={dev.id}
                    Foto={Foto}
                    userId={dev.id}
                    link={`devprofile?id=${dev.id}`}
                    id="card1"
                    name={dev.name}
                    email={dev.email}
                ></Card>
            )
        })
    }
    
    return (
        <div>
            
            <CardDeck id="cardDeck">
                <p>o</p>
                { cards()}
            </CardDeck>
        </div>
    );
};
