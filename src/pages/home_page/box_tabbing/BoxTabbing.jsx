import { box_tabbing_data } from "./BoxTabbingData";

const box_tabbing = () => {
    return (
        <>
            <nav className="box_tabbing">
                <ul>
                    {box_tabbing_data.map((data, index) => {
                        return (
                            <li key={index}>
                                <button className="box_tabbing_btn">
                                    <img src={data.icon} alt={data.title} />
                                    {data.title}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
};

export default box_tabbing;
