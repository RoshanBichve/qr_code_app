import { Col, Container, Row } from "react-bootstrap";

const Header = () => {
    return (
        <>
            <header className="site_header">
                <Container fluid>
                    <Row>
                        <Col lg={3}>
                            <h1>Header</h1>
                        </Col>
                        <Col lg={6}>
                            <h1>Header</h1>
                        </Col>
                        <Col lg={3}>
                            <h1>Header</h1>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    );
};

export default Header;
