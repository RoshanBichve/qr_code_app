import { useState } from "react";
import { ColorPicker } from "../../../../../../components/ColorPicker";
import BoxTabbingTitle from "../../BoxTabbingTitle";

const EyeColor = () => {
    const [EyeColor, setEyeColor] = useState("#242725");
    const [EyeBorderColor, setEyeBorderColor] = useState("#FF7F5C");

    return (
        <div className="tabbing_col Eye_color_col">
            <BoxTabbingTitle title="Custom Eye Color" />

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
    );
};

export default EyeColor;
