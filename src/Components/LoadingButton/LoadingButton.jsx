import loading_img from "../../pics/loading.svg";
import "./LoadingButton.css";

export const LoadingButton = () => {
    return (
        <div type="submit" className={"loading_button"}>
            <img className="loading_img" src={loading_img} />
        </div>
    );
};
