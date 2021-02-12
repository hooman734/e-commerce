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
                                <Button className="px-auto" variant="danger"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg> <span className="text-dark"> Add</span></Button>
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