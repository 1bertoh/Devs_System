import React from "react";
import { BsFillBrightnessHighFill, BsMoon } from "react-icons/bs";
import { Navbar, Nav, Button } from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux'
import './navBar.css'

export default () => {
    const dispatch = useDispatch()
    const theme = useSelector((state) => state.changeTheme.theme)

    return (
        <>
            <Navbar id={theme} variant="dark">
                <Navbar.Brand>Dev Family</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="devs">Devs</Nav.Link>
                    <Nav.Link href="aboutus">About Us</Nav.Link>
                </Nav>
                <Button variant="" onClick={() => {
                    theme === "dark"
                        ? dispatch({ type: "CHANGE_THEME", theme: "light" })
                        : dispatch({ type: "CHANGE_THEME", theme: "dark" });
                }}>
                    {theme === 'dark' ? <BsFillBrightnessHighFill style={{color: 'white'}}></BsFillBrightnessHighFill> : <BsMoon></BsMoon>}
                </Button>
            </Navbar>
        </>
    );
};
