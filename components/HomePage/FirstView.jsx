import * as React from "react";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import {Button, Col, Container, Form, FormControl, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const FirstViewCP = () => {
    return (
        <>
            <Container>
                <style tsx>
                    {`
                  body {
                    background: lightblue url("/home-decoration.jpeg") no-repeat fixed center;
                  }
                `}
                </style>
                <Row className="justify-content-md-center">
                    <Col className="col-auto my-auto">
                        <h1 className="text-danger text-center message fa-4x " >Create Your Comfort Zone.</h1>
                    </Col>

                    <Col className="col-auto my-auto">
                        <Link href="/products">
                            <div className="my-5 btn btn-light px-md-4 px-lg-5">Shop Now!</div>
                        </Link>
                    </Col>

                    <Col className="col-auto my-auto">

                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default FirstViewCP;