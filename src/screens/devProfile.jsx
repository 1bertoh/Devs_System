import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import CardNavigation from "../components/devProfile/cardNavigation";
import { useDispatch, useSelector } from "react-redux";
import devPics from '../redux/devsPics';
import getDevId from '../redux/actions/getDevId'
import getDevsThunk from '../thunks/getDevsThunks'
import "./devProfile.css";

export default function DevProfile (props) {
    const dispatch = useDispatch();
    const query = new URLSearchParams(props.location.search);
    const token = query.get("id");
    const theme = useSelector((status) => status.changeTheme.theme);
    

    useEffect(() => {
        dispatch(getDevsThunk());
        dispatch( getDevId({id: token }));
    });

    return (
        <Card id={`card_profile_${theme}`}>
            <Card.Img variant="top" id="picProfile" src={devPics[token - 1]} />
            <Card.Body>
                <CardNavigation></CardNavigation>
            </Card.Body>
        </Card>
    );
};
