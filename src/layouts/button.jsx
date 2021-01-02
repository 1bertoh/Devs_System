import React from 'react'
import { Button} from "react-bootstrap";
import './button.css'

export default (props) => {

    return (
        <>
            <Button variant="" id="button" o href={props.link} block>
                {props.text}
            </Button>
        </>
    );
}