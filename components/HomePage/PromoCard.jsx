import {Badge, Button, Card, Col, Container, Row} from "react-bootstrap";
import * as React from "react";

const PromoCardCP = props => {
    const {file, price, caption} = props;
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={file} />
                <Card.Body>
                    <Card.Title>
                        <h5 className="text-center">
                            {caption}
                        </h5>
                    </Card.Title>
                    <Container >
                        <Row className="justify-content-center">
                            <Col className="col-2">{''}</Col>
                            <Col className="col-auto">
                                <Card.Text>
                                    <Badge className="text-danger">
                                        <h6>
                                            {price} $
                                        </h6>
                                    </Badge>
                                </Card.Text>
                            </Col>
                            <Col className="col-2">{''}</Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col className="col-2">{''}</Col>
                            <Col className="col-auto">
                                <Button className="px-auto" variant="danger">Add to <i className="fas fa-shopping-cart"></i></Button>
                            </Col>
                            <Col className="col-2">{''}</Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </>
    );
}

export default PromoCardCP;