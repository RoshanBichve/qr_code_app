import { useEffect, useRef, useState } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";

export const ColorPicker = ({ color, setColor }) => {
    const ref = useRef();
    // const [color, setColor] = useState("#f4d558");
    const [pickerToggle, setPickerToggle] = useState(false);

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (pickerToggle && ref.current && !ref.current.contains(e.target)) {
                setPickerToggle(!pickerToggle);
            }
        };

        document.addEventListener("mousedown", checkIfClickedOutside);

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [pickerToggle]);

    const color_picker_swatch = () => {
        return setPickerToggle(!pickerToggle);
    };

    return (
        <>
            <button type="button" className="color_picker_swatch" style={{ background: `${color}` }} onClick={() => color_picker_swatch()}></button>
            <HexColorInput color={color} onChange={setColor} onClick={() => color_picker_swatch()} placeholder="Type a color" prefixed alpha />

            {pickerToggle ? (
                <div className="color_wrapper" ref={ref}>
                    <HexColorPicker color={color} onChange={setColor} />
                </div>
            ) : null}
        </>
    );
};
