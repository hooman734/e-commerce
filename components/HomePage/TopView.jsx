import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import {Button, Col, Container, Form, FormControl, Jumbotron, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';


const TopViewCP = () => {
    return (
        <>
            <Jumbotron style={{
                backgroundImage: `url(/home-decoration.jpeg)`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                {/*<Image style={{*/}
                {/*        position: 'absolute',*/}
                {/*        left: '0px',*/}
                {/*        top: '0px',*/}
                {/*        zIndex: '-5'*/}
                {/*}} src="/home-background.jpeg" width="800" height="500"/>*/}
                <Container className="m-5 p-5 ml-auto mr-auto">
                    <Row className="justify-content-center">
                        <Col className="col-12 my-5">
                            <h1 className="text-danger text-center message fa-4x" >Create Your Comfort Zone</h1>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col className="col-2">{''}</Col>
                        <Col className="col-auto my-5 my-auto">
                            <Link className= "justify-content-center" href="/products">
                                <Button variant="light" size="lg" className="">Shop Now!</Button>
                            </Link>
                        </Col>
                        <Col className="col-2">{''}</Col>
                    </Row>
                </Container>

            </Jumbotron>
        </>
    );
};

export default TopViewCP;