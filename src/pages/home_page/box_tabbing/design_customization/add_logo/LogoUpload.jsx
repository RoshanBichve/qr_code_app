import BoxTabbingTitle from "../BoxTabbingTitle";

const LogoUpload = ({ logoIcon, removeImage, Transparent_logo_bg, uploadImage }) => {
    return (
        <div className="tabbing_col logo_image">
            <BoxTabbingTitle title="Add a Logo or Image to Your QR Code" />

            <div className="logo_input_wp">
                <div className="logo_input">
                    <div className="logo_input_img" onClick={uploadImage}>
                        <img src={logoIcon} alt="" width={40} height={40} />
                        <input type="file" name="logo_upload" id="logo_upload" accept="image/*" hidden />
                    </div>

                    <div className="logo_input_btn">
                        <button type="button" className="sec_btn" onClick={uploadImage}>
                            Upload Image
                        </button>

                        <button type="button" className="sec_btn red_btn" onClick={removeImage}>
                            Remove Image
                        </button>
                    </div>
                </div>
                <div className="form_input_wp checkBox_btn_wp">
                    <input type="checkbox" name="remove_logo_bg" value="remove_logo_bg" id="remove_logo_bg" onClick={Transparent_logo_bg} />
                    <label className="form_label" htmlFor="remove_logo_bg">
                        Remove Background Behind Logo
                    </label>
                </div>
            </div>
        </div>
    );
};

export default LogoUpload;
