import React from "react";
import { Container, Nav, Navbar, NavbarBrand} from 'react-bootstrap';
import "./navbar.css";
import { Link } from "react-router-dom";

function Navigation(){
    return(
        <>
        <Navbar className="navbar-color">
            <Container>
            <NavbarBrand className="navbar-brand">
                <h2>food Receipe</h2>
            </NavbarBrand>
            <Nav className="navbar-style">
                <Nav.Item>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/receipe">Add Recipe</Nav.Link>
                </Nav.Item>
            </Nav>
            </Container>
        </Navbar>
        </>
    )
}
export default Navigation;