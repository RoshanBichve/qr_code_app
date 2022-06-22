import { useState } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";

export const YourComponent = (args) => {
    const [color, setColor] = useState("#f4d558");
    return (
        <div className="crayons-field">
            <div style={{ width: "100px", height: 100, background: `${color}` }}></div>
            <HexColorInput color={color} onChange={setColor} placeholder="Type a color" prefixed alpha />

            <HexColorPicker color={color} onChange={setColor} />
        </div>
    );
};
