import { useState } from "react";
import BoxTabbingData from "./BoxTabbingData";
import DesignCustomization from "./design_customization/DesignCustomization";

const BoxTabbing = () => {
    const [activeTab, setActiveTab] = useState("Set Color");
    const [currentTab, setCurrentTab] = useState(BoxTabbingData[0]);

    const BoxTabbingBtn = (currentTab) => {
        setActiveTab(currentTab);
        const currentTabContent = BoxTabbingData.filter((item) => {
            return item.title === currentTab;
        });
        setCurrentTab(currentTabContent[0]);
    };

    return (
        <>
            <div className="box_tabbing_wp">
                <h4 className="box_title h4_title">Design customization</h4>
                <nav className="box_tabbing">
                    <ul>
                        {BoxTabbingData.map((data) => {
                            return (
                                <li key={data}>
                                    <button
                                        type="button"
                                        className={`${activeTab === data.title ? "box_tabbing_btn is_active" : "box_tabbing_btn"}`}
                                        onClick={() => BoxTabbingBtn(data.title)}
                                    >
                                        <img src={data.icon} alt={data.title} />
                                        {data.title}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <DesignCustomization currentTab={currentTab} />
            </div>
        </>
    );
};

export default BoxTabbing;
