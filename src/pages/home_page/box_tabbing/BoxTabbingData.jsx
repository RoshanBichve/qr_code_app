import ColorIcon from "../../../images/color_icon.svg";
import ImageIcon from "../../../images/image_icon.svg";
import CustomizeIcon from "../../../images/customize_icon.svg";
import SetColor from "./design_customization/set_color/SetColor";
import Add_Logo from "./design_customization/add_logo/Add_Logo";

export const BoxTabbingData = [
    {
        icon: ColorIcon,
        title: "Set Color",
        main: <SetColor />,
    },
    {
        icon: ImageIcon,
        title: "Add Logo Image",
        main: <Add_Logo />,
    },
    {
        icon: CustomizeIcon,
        title: "Customize Design",
    },
];
