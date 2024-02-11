import { FC } from "react";
import { UserPageComponentProps } from "../../ts/interfaces";
import { Header } from "../Header/Header";
import { Avatar } from "../Avatar/Avatar";
import { UserInfo } from "../UserInfo/UserInfo";
import {
    loading_page_img,
    user_page_wrapper,
    user_info_wrapper,
    user_info_block,
} from "./UserPageComponent.style";
import loading_page from "../../pics/loading_page.svg";

export const UserPageComponent: FC<UserPageComponentProps> = ({
    user,
    logOutHandler,
    userInfo,
}) => {
    return user ? (
        <div className={user_page_wrapper}>
            <Header user={user} logOutHandler={logOutHandler} />
            <div className={user_info_wrapper}>
                <div className={user_info_block}>
                    <Avatar avatar={user.avatar_url} />
                    <UserInfo userInfo={userInfo} />
                </div>
            </div>
        </div>
    ) : (
        <div className={user_page_wrapper}>
            <Header logOutHandler={logOutHandler} user={user} />
            <div className={user_info_wrapper}>
                <img className={loading_page_img} src={loading_page} />
            </div>
        </div>
    );
};
