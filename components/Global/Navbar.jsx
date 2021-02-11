import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import {useState} from "react";


const NavbarCP = () => {
    const [showSearch, setShowSearch] = useState(true);

    return (
        <Navbar className="bg-dark" expand="lg">
            <Navbar.Brand href="#home"><h2><span className="text-danger">Your</span> <span className="text-white">Interior</span></h2></Navbar.Brand>
            <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="ml-auto text-white">
                    <Nav.Link href="#home" className="text-white">Furniture</Nav.Link>
                    <Nav.Link href="#link" className="text-white">Lighting</Nav.Link>
                    <Nav.Link href="#link"className="text-white" >Decor</Nav.Link>
                    <Nav.Link href="#link" className="text-white" >Tableware</Nav.Link>
                    <br/>
                    <Nav.Link href="/" className="ml-auto text-white">{/*<i className="fas fa-home"></i>*/} Home</Nav.Link>
                    <Nav.Link href={'/cart'} className="ml-auto text-white">
                        <i className="fas fa-shopping-cart"/>
                    </Nav.Link>
                </Nav>
                <Form inline hidden={showSearch}>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                </Form>
                <Nav>
                    <a className="ml-auto" onClick={() => setShowSearch(!showSearch)}>
                        <Nav.Link className="text-white">
                        <i className="fas fa-search"></i>
                        </Nav.Link>
                    </a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavbarCP