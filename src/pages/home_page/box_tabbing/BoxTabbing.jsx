import { useState } from "react";
import { BoxTabbingData } from "./BoxTabbingData";
import DesignCustomization from "./design_customization/DesignCustomization";

const TabbingData = [
    ...new Set(
        BoxTabbingData.map((data) => {
            return data.title;
        })
    ),
];

const BoxTabbing = () => {
    const [tabbingData, setTabbingData] = useState(TabbingData);
    const [boxData, setBoxData] = useState(BoxTabbingData);

    const BoxTabbingBtn = (curElem) => {
        console.log(curElem);
        const TabbingData = boxData.filter((e) => {
            console.log(e.title);
            return e.title === curElem;
        });

        setBoxData(tabbingData);
    };

    return (
        <>
            <div className="box_tabbing_wp">
                <h4 className="box_title h4_title">Design customization</h4>
                <nav className="box_tabbing">
                    <ul>
                        {BoxTabbingData.map((data, index) => {
                            return (
                                <li key={index}>
                                    <button className="box_tabbing_btn" onClick={() => BoxTabbingBtn(data)}>
                                        <img src={data.icon} alt={data.title} />
                                        {data.title}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <DesignCustomization />
            </div>
        </>
    );
};

export default BoxTabbing;
