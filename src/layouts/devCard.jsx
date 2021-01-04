import React from "react";
import { Card } from "react-bootstrap";
import CompButton from "../layouts/button";
import "./devCard.css";

export default (props) => {
    return (
        <div className="mb-3">
            <Card style={{ width: "18rem" }} id={props.id}>
                <Card.Img
                    variant="top"
                    src={props.Foto}
                    style={{ maxHeight: "12em" }}
                />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.email}</Card.Text>
                    <CompButton
                        devId={props.userId}
                        text="Ver Profile"
                        link={props.link}
                    ></CompButton>
                </Card.Body>
            </Card>
        </div>
    );
};
