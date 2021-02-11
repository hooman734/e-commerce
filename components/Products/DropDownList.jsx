import {SplitButton, Dropdown, Container, Row, Col} from "react-bootstrap";

const DropDownListCP = () => {
    return (
        <>
            <Container className="my-5 mx-auto py-4">
                <Row className="justify-content-center p-3">
                    <Col>
                        <SplitButton
                            variant='info'
                            title='Living Room'
                        >
                            <Dropdown.Item eventKey="1" active>Sofas</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Tables</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Chairs</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Closets</Dropdown.Item>
                        </SplitButton>
                    </Col>
                    <Col>
                        <SplitButton
                            variant='info'
                            title='BedRoom'
                        >
                            <Dropdown.Item eventKey="1">Sofas</Dropdown.Item>
                            <Dropdown.Item eventKey="2" active>Tables</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Chairs</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Closets</Dropdown.Item>
                        </SplitButton>
                    </Col>
                    <Col>
                        <SplitButton
                            variant='info'
                            title='Kitchen'
                        >
                            <Dropdown.Item eventKey="1">Sofas</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Tables</Dropdown.Item>
                            <Dropdown.Item eventKey="3" active>Chairs</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Closets</Dropdown.Item>
                        </SplitButton>
                    </Col>
                    <Col>
                        <SplitButton
                            variant='info'
                            title='Outdoor'
                        >
                            <Dropdown.Item eventKey="1">Sofas</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Tables</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Chairs</Dropdown.Item>
                            <Dropdown.Item eventKey="3" active>Closets</Dropdown.Item>
                        </SplitButton>
                    </Col>
                    <Col>
                        <SplitButton
                            variant='info'
                            title='Office'
                        >
                            <Dropdown.Item eventKey="1" active>Sofas</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Tables</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Chairs</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Closets</Dropdown.Item>
                        </SplitButton>
                    </Col>
                    <Col>
                        <SplitButton
                            variant='info'
                            title='Restaurant'
                        >
                            <Dropdown.Item eventKey="1" active>Sofas</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Tables</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Chairs</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Closets</Dropdown.Item>
                        </SplitButton>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default DropDownListCP;