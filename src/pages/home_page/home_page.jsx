import { Container, Row, Col } from "react-bootstrap";
import Tabbing from "./Tabbing/Tabbing";

const HomePage = () => {
    return (
        <>
            <section className="qr_code_generator mt-50">
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <Tabbing />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={8}>
                            <div className="setting_box common_box">
                                <h4 className="box_title h4_title">Enter Url</h4>
                                <form>
                                    <div className="form_input_wp">
                                        <input type="url" placeholder="https://www.mywebsite.com" className="form_input" />
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default HomePage;
