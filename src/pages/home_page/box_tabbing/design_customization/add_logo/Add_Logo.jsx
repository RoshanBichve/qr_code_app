import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import LogoUpload from "./LogoUpload";
import LogoGallery from "./LogoGallery";
import LogoIconImg from "../../../../../images/logo_icon.svg";

const Add_Logo = () => {
    const [logoIcon, setLogoIcon] = useState(LogoIconImg);
    const [RemoveIconBg, setRemoveIconBg] = useState(false);
    const [iconActive, setIconActive] = useState(null);

    const uploadImage = () => {
        const form_input = document.getElementById("logo_upload");

        form_input.click();

        form_input.onchange = (e) => {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setLogoIcon(reader.result);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
            setIconActive(null);
        };
    };

    const Transparent_logo_bg = () => {
        setRemoveIconBg(!RemoveIconBg);
    };

    const removeImage = () => {
        setLogoIcon(LogoIconImg);
        setIconActive(null);
    };

    return (
        <Row>
            <Col lg={4}>
                <LogoUpload logoIcon={logoIcon} uploadImage={uploadImage} removeImage={removeImage} Transparent_logo_bg={Transparent_logo_bg} />
            </Col>

            <Col lg={8}>
                <LogoGallery setLogoIcon={setLogoIcon} iconActive={iconActive} setIconActive={setIconActive} />
            </Col>
        </Row>
    );
};

export default Add_Logo;
