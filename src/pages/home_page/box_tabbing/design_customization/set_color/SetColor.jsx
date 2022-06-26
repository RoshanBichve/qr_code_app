import { Row, Col } from "react-bootstrap";
import ForegroundColor from "./foreground_color/ForegroundColor";
import BackgroundColor from "./background_color/BackgroundColor";
import EyeColor from "./eye_color/EyeColor";

const SetColor = () => {
    return (
        <Row>
            <Col lg={4}>
                <ForegroundColor />
            </Col>

            <Col lg={4}>
                <BackgroundColor />
            </Col>

            <Col lg={4}>
                <EyeColor />
            </Col>
        </Row>
    );
};

export default SetColor;
