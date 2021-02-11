import {Badge, Col, Container, Jumbotron, Row} from "react-bootstrap";

const FootNoteCP = () => {
    return (
        <>
            <Jumbotron className="pt-5 bg-dark mt-5 mb-n5">
                <Container>
                    <Row>
                        <Col>
                            <Row>
                                <Badge >
                                    <a href="#" className="text-decoration-none">
                                        <h6 className="text-white">
                                            About Us
                                        </h6>
                                    </a>
                                </Badge>
                            </Row>
                            <Row>
                                <Badge>
                                    <a href="#" className="text-decoration-none">
                                        <h6 className="text-white">
                                            Student Discount
                                        </h6>
                                    </a>
                                </Badge>
                            </Row>
                            <Row>
                                <Badge>
                                    <a href="#" className="text-decoration-none">
                                        <h6 className="text-white">
                                            Coupons
                                        </h6>
                                    </a>
                                </Badge>
                            </Row>
                        </Col>

                        <Col>
                            <Row>
                                <Badge>
                                    <a href="#" className="text-decoration-none">
                                        <h6 className="text-white">
                                            Contact Us
                                        </h6>
                                    </a>
                                </Badge>
                            </Row>
                            <Row>
                                <Badge>
                                    <a href="#" className="text-decoration-none">
                                        <h6 className="text-white">
                                            Customer Service
                                        </h6>
                                    </a>
                                </Badge>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Badge>
                                    <a href="#" className="text-decoration-none">
                                        <h6 className="text-white">
                                            FAQ
                                        </h6>
                                    </a>
                                </Badge>
                            </Row>
                            <Row>
                                <Badge>
                                    <a href="#" className="text-decoration-none">
                                        <h6 className="text-white">
                                            Order Status
                                        </h6>
                                    </a>
                                </Badge>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Badge>
                                    <a href="#" className="text-decoration-none">
                                        <h6 className="text-white">
                                            Call Us: +123456789
                                        </h6>
                                    </a>
                                </Badge>
                            </Row>
                            <Row>
                                <Badge>
                                    <a href="#" className="text-decoration-none">
                                        <h6 className="text-white">
                                            Hours: Monday-Friday 10:00-21:00
                                        </h6>
                                    </a>
                                </Badge>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>

        </>
    );
};

export default FootNoteCP;