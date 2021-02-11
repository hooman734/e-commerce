import ImageTileCP from "./ImageTile";
import {Col, Container, Row} from "react-bootstrap";

export default function ImageTilesCP() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h3>High Quality Home Decor</h3>
                        <ImageTileCP></ImageTileCP>
                    </Col>
                </Row>

            </Container>

        </>
    );
}
<style tsx>
    {`
                  body {
                    background: lightblue url("/home-decoration.jpeg") no-repeat fixed center;
                  }
                `}
</style>