import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from "../images/logo.svg";
import "@theme-toggles/react/css/Expand.css";
import { Expand } from "@theme-toggles/react";

const Header = () => {
    const [isToggled, setToggle] = useState(true);
    return (
        <>
            <header className="site_header">
                <Container fluid>
                    <Row>
                        <Col lg={3}>
                            <a href="/" className="site_logo" title="Logo">
                                <img src={Logo} alt="Qr_Logo" />
                            </a>
                        </Col>
                        <Col lg={6}>
                            <nav className="header_menu">
                                <ul>
                                    <li>
                                        <a href="#" title="Home" className="active_menu">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Faq">
                                            Faq
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="Contact">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </Col>
                        <Col lg={3}>
                            <div className="header_button">
                                <Expand toggled={isToggled} toggle={setToggle} duration={600} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    );
};

export default Header;
