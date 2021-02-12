import ImageTileCP from "./ImageTile";
import {Col, Container, Row} from "react-bootstrap";
import * as React from "react";

export default function ImageTilesCP() {
    return (
        <>
            <Container>
                <Row>
                    <Col className="col-6">
                        <ImageTileCP file={"/living-room.jpg"} width={"600px"} height={"500px"} caption={"Living Room"}></ImageTileCP>
                    </Col>
                    <Col className="col-6">
                        <ImageTileCP file={"/kitchen.jpg"} width={"600"} height={"400px"} caption={"Kitchen"}></ImageTileCP>
                    </Col>
                    <Col className="col-6">
                        <ImageTileCP file={`/bedroom.png`} width={"600px"} height={"400px"} caption={"Bedroom"}></ImageTileCP>
                    </Col>
                    <Col className="col-6">
                        <ImageTileCP file={"/bathroom.jpg"} width={"600px"} height={"500px"} caption={"Bathroom"}></ImageTileCP>
                    </Col>
                </Row>

            </Container>

        </>
    );
}