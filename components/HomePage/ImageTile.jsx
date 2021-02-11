import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import {Badge, Container, Row, Col} from "react-bootstrap";


const ImageTileCP = props => {
    const {file, width, height, caption} = props;
    return (
        <>
            <Container>
                <Row className="justify-content-center">
                    <Col>
                        <Link href="/products">
                            <Image
                                src={file}
                                width={width}
                                height={height}
                            />
                        </Link>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col className="col-4">{''}</Col>
                    <Col className="col-auto">
                        <h4>
                            <Link href="/products">
                            <Badge className="text-center">{caption}</Badge>
                            </Link>
                        </h4>
                    </Col>
                    <Col className="col-4">{''}</Col>
                </Row>
            </Container>
        </>
    );
}

export default ImageTileCP;