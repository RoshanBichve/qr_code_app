import { Col, Container, Row } from "react-bootstrap";
import Logo from "../images/logo.svg";

const Header = () => {
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
                                        <a href="#" title="Home">
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
                        <Col lg={3}></Col>
                    </Row>
                </Container>
            </header>
        </>
    );
};

export default Header;
