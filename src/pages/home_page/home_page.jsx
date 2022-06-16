import { Container, Row, Col } from "react-bootstrap";
import Tabbing from "./Tabbing/Tabbing";
import ColorIcon from "../../images/color_icon.svg";
import ImageIcon from "../../images/image_icon.svg";
import CustomizeIcon from "../../images/customize_icon.svg";

const HomePage = () => {
    const Submit = (e) => {
        e.preventDefault();
    };

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
                                <form onSubmit={Submit}>
                                    <div className="form_input_wp">
                                        <h4 className="box_title h4_title">Enter Url</h4>
                                        <input type="url" placeholder="https://www.mywebsite.com" className="form_input" />
                                    </div>
                                    <div className="box_tabbing_wp">
                                        <h4 className="box_title h4_title">Design customization</h4>
                                        <nav className="box_tabbing">
                                            <ul>
                                                <li>
                                                    <button className="tabbing_btn is_active">
                                                        <img src={ColorIcon} alt="Color Icon" />
                                                        Set Color
                                                    </button>
                                                </li>
                                                <li>
                                                    <button className="tabbing_btn">
                                                        <img src={ImageIcon} alt="Image Icon" />
                                                        Add Logo Image
                                                    </button>
                                                </li>
                                                <li>
                                                    <button className="tabbing_btn">
                                                        <img src={CustomizeIcon} alt="Customize Icon" />
                                                        Customize Design
                                                    </button>
                                                </li>
                                            </ul>
                                        </nav>

                                        <div className="tabbing_content">
                                            <Row>
                                                <Col lg={4}>
                                                    <div className="tabbing_col">
                                                        <h5 className="tabbing_title">Foreground Color</h5>
                                                    </div>
                                                </Col>

                                                <Col lg={4}>
                                                    <div className="tabbing_col">
                                                        <h5 className="tabbing_title">Background Color</h5>
                                                    </div>
                                                </Col>

                                                <Col lg={4}>
                                                    <div className="tabbing_col">
                                                        <h5 className="tabbing_title">Custom Eye Color</h5>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
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
