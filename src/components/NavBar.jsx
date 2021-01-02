import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand >Dev Family</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="devs">Devs</Nav.Link>
                    <Nav.Link href="aboutus">About Us</Nav.Link>
                    </Nav>
                <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                    />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
            
        </>
    );
}