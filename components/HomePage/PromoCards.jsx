import PromoCardCP from "./PromoCard";
import {Col, Container, Row} from "react-bootstrap";

const PromoCardsCP = () => {
    return (
        <>
            <Container className="mb-4">
                <Row className="mx-sm-n5">
                    <Col className="mx-n3">
                        <PromoCardCP file={'sofa1.jpeg'} price={'999'} caption={'Sofa Francesca Model One'}/>
                    </Col>
                    <Col className="mx-n3">
                        <PromoCardCP file={'sofa2.jpg'} price={'1299'} caption={'Sofa Francesca Model Two'}/>
                    </Col>
                    <Col className="mx-n3">
                        <PromoCardCP file={'sofa3.jpg'} price={'899'} caption={'Sofa Francesca Model Three'}/>
                    </Col>
                    <Col className="mx-n3">
                        <PromoCardCP file={'sofa4.png'} price={'1499'} caption={'Sofa Francesca Model Four'}/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default PromoCardsCP;