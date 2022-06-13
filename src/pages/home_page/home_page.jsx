import { Container, Row, Col } from "react-bootstrap";
import Tabbing from "./Tabbing/Tabbing";

const HomePage = () => {
    return (
        <>
            <section className="qr_code_generator">
                <Container fluid>
                    <Row>
                        <Col>
                            <Tabbing />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default HomePage;
