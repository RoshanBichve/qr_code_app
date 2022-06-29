import { useState } from "react";
import { ColorPicker } from "../../../../../../components/ColorPicker";
import BoxTabbingTitle from "../../BoxTabbingTitle";

const BackgroundColor = () => {
    const [BackgroundColor, setBackgroundColor] = useState("#ffffff");

    const [isTransparent, setIsTransparent] = useState(false);

    const Transparent_background = () => {
        setIsTransparent(!isTransparent);
        if (!isTransparent) {
            return setBackgroundColor(null);
        } else {
            return setBackgroundColor("#ffffff");
        }
    };

    return (
        <div className="tabbing_col background_color_col">
            <BoxTabbingTitle title="Background Color" />

            <div className="tabbing_col_text">
                <div className="form_input_wp color_picker_wp">
                    <ColorPicker AllColor={BackgroundColor} setAllColor={setBackgroundColor} isTransparent={isTransparent} />
                </div>
                <div className="form_input_wp checkBox_btn_wp">
                    <input type="checkbox" name="background_color" value="background_color" id="background_color" onClick={Transparent_background} />
                    <label className="form_label" htmlFor="background_color">
                        Transparent background
                    </label>
                </div>
            </div>
        </div>
    );
};

export default BackgroundColor;
