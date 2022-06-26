import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { ColorPicker } from "../../../../../components/ColorPicker";
import SwapIcon from "../../../../../images/swap_icon.svg";

const SetColor = () => {
    const [SolidColor, setSolidColor] = useState("#f4d558");
    const [GradientTop, setGradientTop] = useState("#242725");
    const [GradientBottom, setGradientBottom] = useState("#EF5DA8");

    const [BackgroundColor, setBackgroundColor] = useState("#ffffff");

    const [EyeColor, setEyeColor] = useState("#242725");
    const [EyeBorderColor, setEyeBorderColor] = useState("#FF7F5C");

    const AllColor = { SolidColor, GradientTop, GradientBottom, BackgroundColor, EyeColor, EyeBorderColor };
    const setAllColor = { setSolidColor, setGradientTop, setGradientBottom, setBackgroundColor, setEyeColor, setEyeBorderColor };

    const [isTransparent, setIsTransparent] = useState(false);
    const [solidColorRadio, setSolidColorRadio] = useState(true);
    const [gradientColorRadio, setGradientColorRadio] = useState(false);

    const [radioActive, setRadioActive] = useState(null);

    const SwapColor = () => {
        setGradientTop(GradientBottom);
        setGradientBottom(GradientTop);
    };

    const Transparent_background = () => {
        setIsTransparent(!isTransparent);

        if (!isTransparent) {
            return setBackgroundColor(null);
        } else {
            return setBackgroundColor("#ffffff");
        }
    };

    const foreground_radio = () => {
        setRadioActive(!radioActive);
        setSolidColorRadio(!solidColorRadio);
        setGradientColorRadio(!gradientColorRadio);
    };

    return (
        <Row>
            <Col lg={4}>
                <div className="tabbing_col foreground_color_col">
                    <h5 className="tabbing_title">Foreground Color</h5>
                    <div className="tabbing_col_2">
                        <div className={radioActive ? "tabbing_col_text" : "tabbing_col_text isRadioActive"}>
                            <div className="form_input_wp radio_btn_wp">
                                <input
                                    type="radio"
                                    name="foreground_color"
                                    id="solid_color"
                                    value={SolidColor}
                                    checked={solidColorRadio}
                                    onChange={foreground_radio}
                                />
                                <label className="form_label" htmlFor="solid_color">
                                    solid color
                                </label>
                            </div>

                            <div className="form_input_wp color_picker_wp">
                                <ColorPicker AllColor={SolidColor} setAllColor={setSolidColor} />
                            </div>
                        </div>

                        <div className={!radioActive ? "tabbing_col_text" : "tabbing_col_text isRadioActive"}>
                            <div className="form_input_wp radio_btn_wp">
                                <input
                                    type="radio"
                                    name="foreground_color"
                                    id="gradient_color"
                                    value={SolidColor}
                                    checked={gradientColorRadio}
                                    onChange={foreground_radio}
                                />
                                <label className="form_label" htmlFor="gradient_color">
                                    Gradient Color
                                </label>
                            </div>
                            <div className="gradient_color_wp">
                                <div className="form_input_wp color_picker_wp">
                                    <ColorPicker AllColor={GradientTop} setAllColor={setGradientTop} />
                                </div>
                                <button type="button" className="color_swap" onClick={SwapColor}>
                                    <img src={SwapIcon} alt="SwapIcon" />
                                </button>
                                <div className="form_input_wp color_picker_wp">
                                    <ColorPicker AllColor={GradientBottom} setAllColor={setGradientBottom} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>

            <Col lg={4}>
                <div className="tabbing_col background_color_col">
                    <h5 className="tabbing_title">Background Color</h5>
                    <div className="tabbing_col_text">
                        <div className="form_input_wp color_picker_wp">
                            <ColorPicker AllColor={BackgroundColor} setAllColor={setBackgroundColor} isTransparent={isTransparent} />
                        </div>
                        <div className="form_input_wp checkBox_btn_wp">
                            <input
                                type="checkbox"
                                name="background_color"
                                value="background_color"
                                id="background_color"
                                onClick={Transparent_background}
                            />
                            <label className="form_label" htmlFor="background_color">
                                Transparent background
                            </label>
                        </div>
                    </div>
                </div>
            </Col>

            <Col lg={4}>
                <div className="tabbing_col Eye_color_col">
                    <h5 className="tabbing_title">Custom Eye Color</h5>
                    <div className="tabbing_col_2">
                        <div className="tabbing_col_text">
                            <div className="form_input_wp color_picker_wp">
                                <ColorPicker AllColor={EyeColor} setAllColor={setEyeColor} />
                            </div>
                        </div>

                        <div className="tabbing_col_text">
                            <div className="form_input_wp color_picker_wp">
                                <ColorPicker AllColor={EyeBorderColor} setAllColor={setEyeBorderColor} />
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default SetColor;
