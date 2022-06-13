import { TabbingData } from "../Tabbing/TabbingData";

const Tabbing = () => {
    return (
        <>
            <div className="tabbing_wrapper mt-50">
                <ul>
                    {TabbingData.map((data) => {
                        return (
                            <li key={data.id}>
                                <button type="button" className="tabbing_button">
                                    <img width={16} src={data.icon} alt="Icon" />
                                    {data.title}
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
