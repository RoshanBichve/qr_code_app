import { useState } from "react";

const Demo = () => {
    const [toggle, setToggle] = useState(1);

    const toggleBtn = (e) => {
        setToggle(e);
    };
    return (
        <>
            <ul>
                <li>
                    <button className={toggle === 1 ? "active" : ""} onClick={() => toggleBtn(1)}>
                        tab1
                    </button>
                </li>
                <li>
                    <button className={toggle === 2 ? "active" : ""} onClick={() => toggleBtn(2)}>
                        tab2
                    </button>
                </li>
                <li>
                    <button className={toggle === 3 ? "active" : ""} onClick={() => toggleBtn(3)}>
                        tab3
                    </button>
                </li>
            </ul>

            <div className="contact_wp">
                <div className={toggle === 1 ? "d-block" : "d-none"}>
                    <h1>tab1</h1>
                    <input type="text" />
                </div>
                <div className={toggle === 2 ? "d-block" : "d-none"}>
                    <h1>tab2</h1>
                    <input type="text" />
                </div>
                <div className={toggle === 3 ? "d-block" : "d-none"}>
                    <h1>tab3</h1>
                </div>
            </div>
        </>
    );
};

export default Demo;
