import { useState } from "react";
import { ColorPicker } from "../../../../../../components/ColorPicker";
import SwapIcon from "../../../../../../images/swap_icon.svg";

const FgGradientColor = ({ foreground_radio, radioActive, gradientColorRadio }) => {
    const [GradientTop, setGradientTop] = useState("#242725");
    const [GradientBottom, setGradientBottom] = useState("#EF5DA8");

    const SwapColor = () => {
        setGradientTop(GradientBottom);
        setGradientBottom(GradientTop);
    };

    return (
        <div className={!radioActive ? "tabbing_col_text" : "tabbing_col_text isRadioActive"}>
            <div className="form_input_wp radio_btn_wp">
                <input type="radio" name="foreground_color" id="gradient_color" checked={gradientColorRadio} onChange={foreground_radio} />
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
    );
};

export default FgGradientColor;
