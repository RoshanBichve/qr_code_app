function importAll(icon) {
    let images = {};
    icon.keys().map((item, index) => {
        images[item.replace("./", "")] = icon(item);
    });
    return images;
}

const images = importAll(require.context("../../../../../images/icon_gallery", false, /\.(png|jpe?g|svg)$/));

export const LogoGalleryData = [
    {
        id: "01",
        icon: images["01_icon.svg"],
    },
    {
        id: "02",
        icon: images["02_icon.svg"],
    },
    {
        id: "03",
        icon: images["03_icon.svg"],
    },
    {
        id: "04",
        icon: images["04_icon.svg"],
    },
    {
        id: "05",
        icon: images["05_icon.svg"],
    },
    {
        id: "06",
        icon: images["06_icon.svg"],
    },
    {
        id: "07",
        icon: images["07_icon.svg"],
    },
    {
        id: "08",
        icon: images["08_icon.svg"],
    },
    {
        id: "09",
        icon: images["09_icon.svg"],
    },
    {
        id: "10",
        icon: images["10_icon.svg"],
    },
    {
        id: "11",
        icon: images["11_icon.svg"],
    },
    {
        id: "12",
        icon: images["12_icon.svg"],
    },
    {
        id: "13",
        icon: images["13_icon.svg"],
    },
    {
        id: "14",
        icon: images["14_icon.svg"],
    },
    {
        id: "15",
        icon: images["15_icon.svg"],
    },
    {
        id: "16",
        icon: images["16_icon.svg"],
    },
    {
        id: "17",
        icon: images["17_icon.svg"],
    },
    {
        id: "18",
        icon: images["18_icon.svg"],
    },
    {
        id: "19",
        icon: images["19_icon.svg"],
    },
];
