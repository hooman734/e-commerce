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
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
                    </Nav.Link>
                </Nav>
                <Form inline hidden={showSearch}>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                </Form>
                <Nav>
                    <a className="ml-auto" onClick={() => setShowSearch(!showSearch)}>
                        <Nav.Link className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z"/></svg>
                        </Nav.Link>
                    </a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavbarCP