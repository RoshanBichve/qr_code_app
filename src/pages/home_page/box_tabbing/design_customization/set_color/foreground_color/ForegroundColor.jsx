import { useState } from "react";
import FgGradientColor from "./FgGradientColor";
import ForegroundSolidColor from "./FgSolidColor";
import BoxTabbingTitle from "../../BoxTabbingTitle";

const ForegroundColor = () => {
    const [solidColorRadio, setSolidColorRadio] = useState(true);
    const [gradientColorRadio, setGradientColorRadio] = useState(false);

    const [radioActive, setRadioActive] = useState(null);

    const foreground_radio = () => {
        setRadioActive(!radioActive);
        setSolidColorRadio(!solidColorRadio);
        setGradientColorRadio(!gradientColorRadio);
    };

    return (
        <div className="tabbing_col foreground_color_col">
            <BoxTabbingTitle title="Foreground Color" />
            <div className="tabbing_col_2">
                <ForegroundSolidColor foreground_radio={foreground_radio} radioActive={radioActive} solidColorRadio={solidColorRadio} />

                <FgGradientColor foreground_radio={foreground_radio} radioActive={radioActive} gradientColorRadio={gradientColorRadio} />
            </div>
        </div>
    );
};

export default ForegroundColor;
