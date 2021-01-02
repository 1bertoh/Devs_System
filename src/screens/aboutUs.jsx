import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import {useSelector, useDispatch} from 'react-redux'

export default (props) => {
    const name = useSelector(state => state.nome)
    const dispatch = useDispatch()

    function changeName(e) {
        dispatch({type:'CHANGE_NAME', name:e})
    }
    
    return (
        <div>
            <p style={{ color: "white" }}>{name}</p>
            <label htmlFor="basic-url">Your vanity URL</label>
            <InputGroup className="mb-3">
                <FormControl
                    onChange={(e) => {
                        changeName(e.target.value);
                    }}
                    id="basic-url"
                    aria-describedby="basic-addon3"
                />
            </InputGroup>
        </div>
    );
};
