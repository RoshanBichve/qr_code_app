import { useState } from "react";
import { ColorPicker } from "../../../../../components/ColorPicker";
import SwapIcon from "../../../../../images/swap_icon.svg";

const ForegroundColor = () => {
    return (
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
    );
};

export default ForegroundColor;
