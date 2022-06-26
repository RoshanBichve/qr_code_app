import { useState } from "react";
import { ColorPicker } from "../../../../../../components/ColorPicker";

const ForegroundSolidColor = ({ foreground_radio, radioActive, solidColorRadio }) => {
    const [SolidColor, setSolidColor] = useState("#f4d558");

    return (
        <div className={radioActive ? "tabbing_col_text" : "tabbing_col_text isRadioActive"}>
            <div className="form_input_wp radio_btn_wp">
                <input type="radio" name="foreground_color" id="solid_color" checked={solidColorRadio} onChange={foreground_radio} />
                <label className="form_label" htmlFor="solid_color">
                    solid color
                </label>
            </div>

            <div className="form_input_wp color_picker_wp">
                <ColorPicker AllColor={SolidColor} setAllColor={setSolidColor} />
            </div>
        </div>
    );
};

export default ForegroundSolidColor;
