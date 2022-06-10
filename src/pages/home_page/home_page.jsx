import { Container, Row, Col } from "react-bootstrap";
import urlIcon from "../../images/url_icon.svg";

const HomePage = () => {
    return (
        <>
            <section className="qr_code_generator">
                <Container fluid>
                    <Row>
                        <Col>
                            <div className="tabbing_wrapper">
                                <ul>
                                    <li>
                                        <button type="button" className="tabbing_button active_tabbing_button">
                                            <img width={16} src={urlIcon} alt="Url Icon" />
                                            url
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="tabbing_button">
                                            <img width={16} src={urlIcon} alt="Url Icon" />
                                            url
                                        </button>
                                    </li>

                                    <li>
                                        <button type="button" className="tabbing_button">
                                            <img width={16} src={urlIcon} alt="Url Icon" />
                                            url
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default HomePage;
