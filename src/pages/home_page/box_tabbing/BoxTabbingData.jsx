import ColorIcon from "../../../images/color_icon.svg";
import ImageIcon from "../../../images/image_icon.svg";
import CustomizeIcon from "../../../images/customize_icon.svg";
import SetColor from "./design_customization/set_color/SetColor";
import Add_Logo from "./design_customization/add_logo/Add_Logo";

const BoxTabbingData = [
    {
        id: 1,
        icon: ColorIcon,
        title: "Set Color",
        main: <SetColor />,
    },
    {
        id: 2,
        icon: ImageIcon,
        title: "Add Logo Image",
        main: <Add_Logo />,
    },
    {
        id: 3,
        icon: CustomizeIcon,
        title: "Customize Design",
        main: null,
    },
];

export default BoxTabbingData;
