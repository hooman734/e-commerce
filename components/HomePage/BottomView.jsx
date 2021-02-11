import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import {Button, Col, Container, Form, FormControl, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import ImageTilesCP from "./ImageTiles";


const BottomViewCP = () => {
    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col className="col-auto my-auto">
                        <h3 className="text-danger text-center">High Quality Home Decor</h3>
                        <p className="text-center">Lorem ipsum dolor sit amet, consecrated advising elite, sed do emus temper incident ut labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center py-5 my-5 my-auto">
                    <Col className="col-auto my-auto">
                        <ImageTilesCP/>
                    </Col>
                </Row>

            </Container>
        </>
    );
}

export default BottomViewCP;