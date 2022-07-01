import BoxTabbingTitle from "../BoxTabbingTitle";
import { LogoGalleryData } from "./LogoGalleryData";

const LogoGallery = ({ setLogoIcon, iconActive, setIconActive }) => {
    return (
        <>
            <BoxTabbingTitle title="Select Logo From Gallery" />

            <div className="logo_gallery">
                <ul>
                    {LogoGalleryData.map((data) => {
                        const clicked = () => {
                            setLogoIcon(data.icon);
                            setIconActive(() => {
                                return data.id;
                            });
                        };
                        return (
                            <li key={data.id}>
                                <button onClick={() => clicked()} className={iconActive === data.id ? "isActive" : ""}>
                                    <img src={data.icon} alt="Logo Icon" />
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default LogoGallery;
