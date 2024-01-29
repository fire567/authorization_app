import { Header } from "../Header/Header";
import { Avatar } from "../Avatar/Avatar";
import { UserInfo } from "../UserInfo/UserInfo";
import loading_page from "../../pics/loading_page.svg";
import "./UserPageComponent.css";

export const UserPageComponent = ({ user, logOutHandler, userInfo }) => {
    return user ? (
        <div className="user_page_wrapper">
            <Header user={user} logOutHandler={logOutHandler} />
            <div className="user_info_wrapper">
                <div className="user_info_block">
                    <Avatar />
                    <UserInfo userInfo={userInfo} />
                </div>
            </div>
        </div>
    ) : (
        <div className="user_page_wrapper">
            <Header logOutHandler={logOutHandler} />
            <div className="user_info_wrapper">
                <img className="loading_page_img" src={loading_page} />
            </div>
        </div>
    );
};
