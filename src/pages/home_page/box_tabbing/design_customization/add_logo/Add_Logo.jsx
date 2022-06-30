import React from "react";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import BoxTabbingTitle from "../BoxTabbingTitle";
import LogoIconImg from "../../../../../images/logo_icon.svg";
import { LogoGalleryData } from "./LogoGalleryData";

const Add_Logo = () => {
    const [logoIcon, setLogoIcon] = useState(LogoIconImg);
    const [RemoveIconBg, setRemoveIconBg] = useState(false);

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

    const Transparent_logo_bg = () => {
        setRemoveIconBg(!RemoveIconBg);
    };

    return (
        <div>
            <Row>
                <Col lg={4}>
                    <div className="tabbing_col logo_image">
                        <BoxTabbingTitle title="Add a Logo or Image to Your QR Code" />

                        <div className="logo_input_wp">
                            <div className="logo_input">
                                <div className="logo_input_img" onClick={uploadImage}>
                                    <img src={logoIcon} alt="" width={40} height={40} />
                                    <input type="file" name="logo_upload" id="logo_upload" accept="image/*" hidden />
                                </div>

                                <div className="logo_input_btn">
                                    <button type="button" className="sec_btn" onClick={uploadImage}>
                                        Upload Image
                                    </button>

                                    <button type="button" className="sec_btn red_btn" onClick={removeImage}>
                                        Remove Image
                                    </button>
                                </div>
                            </div>
                            <div className="form_input_wp checkBox_btn_wp">
                                <input
                                    type="checkbox"
                                    name="background_color"
                                    value="background_color"
                                    id="background_color"
                                    onClick={Transparent_logo_bg}
                                />
                                <label className="form_label" htmlFor="background_color">
                                    Remove Background Behind Logo
                                </label>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col lg={8}>
                    <BoxTabbingTitle title="Select Logo From Gallery" />

                    <div className="logo_gallery">
                        <ul>
                            {LogoGalleryData.map((data) => {
                                return (
                                    <li key={data.id}>
                                        <button>
                                            <img src={data.icon} alt="" />
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Add_Logo;
