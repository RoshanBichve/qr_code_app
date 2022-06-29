import React from "react";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import BoxTabbingTitle from "../BoxTabbingTitle";
import LogoIconImg from "../../../../../images/logo_icon.svg";

const Add_Logo = () => {
    const [logoIcon, setLogoIcon] = useState(LogoIconImg);

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
        };
    };

    const removeImage = () => {
        setLogoIcon(LogoIconImg);
    };

    return (
        <div>
            <Row>
                <Col lg={4}>
                    <div className="tabbing_col logo_image">
                        <BoxTabbingTitle title="Add a Logo or Image to Your QR Code" />

                        <div className="logo_input">
                            <div className="logo_input_img" onClick={uploadImage}>
                                <img src={logoIcon} alt="" width={40} height={40} />
                                <input type="file" name="logo_upload" id="logo_upload" accept="image/*" hidden />
                            </div>

                            <div className="logo_input_btn">
                                <button type="button" className="sec_btn" onClick={uploadImage}>
                                    Upload Image
                                </button>

                                <button type="button" className="sec_btn" onClick={removeImage}>
                                    Remove Image
                                </button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Add_Logo;
