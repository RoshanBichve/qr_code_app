import { Container, Row, Col } from "react-bootstrap";
import Tabbing from "./Tabbing/Tabbing";
import BoxTabbing from "./box_tabbing/BoxTabbing";
import UrlTab from "./Tabbing/url_tab/UrlTab";

const HomePage = () => {
    const Submit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <section className="qr_code_generator mt_50">
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <Tabbing />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={8}>
                            <div className="setting_box common_box">
                                <form onSubmit={Submit}>
                                    <UrlTab />

                                    <BoxTabbing />
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
