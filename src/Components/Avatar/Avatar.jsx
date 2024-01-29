import user_pic from "../../pics/pic.jpg";
import "./Avatar.css";

export const Avatar = () => {
    return <img className="user_pic" src={user_pic} alt="user pic" />;
};
