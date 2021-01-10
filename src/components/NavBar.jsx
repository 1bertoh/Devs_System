import React from "react";
import { BsFillBrightnessHighFill, BsMoon } from "react-icons/bs";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import changeTheme from '../redux/actions/changeTheme'
import "./navBar.css";

export default function NavBar (props) {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.changeTheme.theme);

    return (
        <>
            <Navbar id={`nav_bar_${theme}`} variant="dark">
                <Navbar.Brand>Dev Family</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="devs">Devs</Nav.Link>
                    <Nav.Link href="aboutus">About Us</Nav.Link>
                </Nav>
                <Button
                    variant=""
                    onClick={() => {
                        theme === "dark"
                            ? dispatch(changeTheme({ theme: "light" }))
                            : dispatch(changeTheme({ theme: "dark" }));
                        props.sendTheme(theme);
                    }}
                >
                    {theme === "dark" ? (
                        <BsFillBrightnessHighFill
                            style={{ color: "white" }}
                        ></BsFillBrightnessHighFill>
                    ) : (
                        <BsMoon></BsMoon>
                    )}
                </Button>
            </Navbar>
        </>
    );
};
