import { useEffect, useRef, useState } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";

export const ColorPicker = ({ AllColor, setAllColor, isTransparent }) => {
    const ref = useRef();

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

    function color_picker_swatch() {
        if (isTransparent) {
            setPickerToggle(null);
        } else if (!pickerToggle) {
            setPickerToggle(true);
        }
    }

    return (
        <>
            <button
                type="button"
                className="color_picker_swatch"
                style={{ backgroundColor: !isTransparent ? `${AllColor}` : "rgba(0,0,0,0)" }}
                onClick={() => color_picker_swatch()}
            ></button>
            <HexColorInput
                color={!isTransparent ? `${AllColor}` : "0000000"}
                onChange={!isTransparent ? `${setAllColor}` : null}
                onClick={() => color_picker_swatch()}
                prefixed
                alpha
            />

            {pickerToggle ? (
                <div className="color_wrapper" ref={ref}>
                    <HexColorPicker color={AllColor} onChange={setAllColor} />
                </div>
            ) : null}
        </>
    );
};
