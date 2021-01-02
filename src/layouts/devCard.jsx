import React from "react";
import {Card, Button} from "react-bootstrap";
import CompButton from '../layouts/button'
import './devCard.css'


export default (props) => {
    return (
        <div className='mb-3'>
            <Card style={{ width: "18rem" }} id={props.userId}>
                <Card.Img variant="top" src={props.Foto} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.email}
                    </Card.Text>
                    <CompButton devId={props.userId} text='Ver Profle' link={props.link}></CompButton>
                </Card.Body>
            </Card>
        </div>
    );
};
