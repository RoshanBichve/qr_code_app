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
                    <Row className="align-items-center">
                        <Col lg={3}>
                            <a href="/" className="site_logo" title="Logo">
                                <img src={Logo} alt="Qr_Logo" />
                            </a>
                        </Col>
                        <Col lg={6}>
                            <nav className="header_menu">
                                <ul>
                                    <li>
                                        <a href="/" title="Home" className="active_menu">
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

                                <div className="drop_down">
                                    <button className="drop_down_btn">
                                        English
                                        <svg width="12" height="5" viewBox="0 0 12 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 5L0 0L12 1.34596e-06L6 5Z" fill="white" />
                                        </svg>
                                    </button>
                                    <ul className="drop_down_list">
                                        <li>
                                            <a href="#" title="English">
                                                English
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="English">
                                                English
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="English">
                                                English
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    );
};

export default Header;
