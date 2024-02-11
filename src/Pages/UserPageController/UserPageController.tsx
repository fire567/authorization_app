import { Dispatch, SetStateAction, useEffect } from "react";
import { FC } from "react";
import { UserData } from "../../ts/interfaces";
import { getUser } from "../../api/api";
import { UserPageComponent } from "../../Components/UserPageComponent/UserPageComponent";
import { useNavigate } from "react-router-dom";
import React from "react";

interface UserPageControllerProps {
    setUserData: Dispatch<SetStateAction<null>>;
    userData: UserData | null;
}

export const UserPageController: FC<UserPageControllerProps> = ({
    setUserData,
    userData,
}) => {
    const userStorage: UserData = JSON.parse(
        localStorage.getItem("user") || "{}"
    );
    const navigate = useNavigate();

    useEffect(() => {
        if (Object.keys(userStorage).length !== 0) {
            getUser(userStorage.login)
                .then((user) => {
                    setUserData(user.data);
                })
                .catch(() => {
                    "Пользователя не существует";
                });
        }
    }, []);

    const userInfo = [
        {
            id: 0,
            infoName: "Публичные репозитории",
            infoValue: userData ? userData.public_repos : null,
        },
        {
            id: 1,
            infoName: "Подписчики",
            infoValue: userData ? userData.followers : null,
        },
        {
            id: 2,
            infoName: "Подписан на",
            infoValue: userData ? userData.following : null,
        },
    ];

    const logOutHandler = () => {
        setUserData(null);
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <UserPageComponent
            user={userData}
            logOutHandler={logOutHandler}
            userInfo={userInfo}
        />
    );
};
