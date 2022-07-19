import { useState } from "react";
import BoxTabbingData from "./BoxTabbingData";

const BoxTabbing = () => {
    const [toggle, setToggle] = useState(1);

    const toggleBtn = (e) => {
        setToggle(e);
    };
    return (
        <>
            <div className="box_tabbing_wp">
                <h4 className="box_title h4_title">Design customization</h4>
                <BoxTabbing />
                <nav className="box_tabbing">
                    <ul>
                        {BoxTabbingData.map((data) => {
                            return (
                                <li key={data.id}>
                                    <button
                                        type="button"
                                        className={`${toggle === data.id ? "box_tabbing_btn is_active" : "box_tabbing_btn"}`}
                                        onClick={() => toggleBtn(data.id)}
                                    >
                                        <img src={data.icon} alt={data.title} />
                                        {data.title}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {BoxTabbingData.map((data) => {
                    return (
                        <div className={`${toggle === data.id ? "d-block tabbing_content" : "d-none"}`} key={data.id}>
                            {data.main}
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default BoxTabbing;
