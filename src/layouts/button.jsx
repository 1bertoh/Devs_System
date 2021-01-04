import React from "react";
import { Button } from "react-bootstrap";
import "./button.css";
import { useSelector } from "react-redux";

export default (props) => {
    const theme = useSelector((status) => status.changeTheme.theme);

    return (
        <>
            <Button variant="" id={`button_${theme}`} href={props.link} block>
                {props.text}
            </Button>
        </>
    );
};
