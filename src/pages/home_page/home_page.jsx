import { Container, Row, Col } from "react-bootstrap";
import Tabbing from "./Tabbing/Tabbing";
import Box_tabbing from "./box_tabbing/box_tabbing";
import { YourComponent } from "../../components/ColorPicker";

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
                                        <Box_tabbing />

                                        <div className="tabbing_content">
                                            <Row>
                                                <Col lg={4}>
                                                    <div className="tabbing_col">
                                                        <h5 className="tabbing_title">Foreground Color</h5>
                                                        <div className="tabbing_col_2">
                                                            <div className="form_input_wp radio_btn_wp">
                                                                <input
                                                                    type="radio"
                                                                    name="foreground_color"
                                                                    value="solid_color"
                                                                    id="solid_color"
                                                                    checked
                                                                />
                                                                <label className="form_label" for="solid_color">
                                                                    solid color
                                                                </label>
                                                            </div>
                                                            <div className="form_input_wp radio_btn_wp">
                                                                <input
                                                                    type="radio"
                                                                    name="foreground_color"
                                                                    value="gradient_color"
                                                                    id="gradient_color"
                                                                />
                                                                <label className="form_label" for="gradient_color">
                                                                    Gradient Color
                                                                </label>
                                                            </div>
                                                        </div>

                                                        <div className="tabbing_col_2">
                                                            <div className="form_input_wp color_picker_wp">
                                                                <YourComponent />
                                                            </div>
                                                        </div>
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
