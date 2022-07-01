import { TabbingData } from "../Tabbing/TabbingData";

const Tabbing = () => {
    return (
        <>
            <div className="tabbing_wrapper mb_30">
                <ul>
                    {TabbingData.map((data) => {
                        return (
                            <li key={data.id}>
                                <button type="button" className="tabbing_button">
                                    <img width={16} src={data.icon} alt="Icon" />
                                    {data.tab_title}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default Tabbing;
