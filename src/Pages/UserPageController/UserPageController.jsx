import { useEffect } from "react";
import { getUser } from "../../api/api";
import "./UserPageController.css";
import { UserPageComponent } from "../../Components/UserPageComponent/UserPageComponent";

export const UserPageController = ({ setUserData, userData }) => {
    const userStorage = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        userStorage &&
            getUser(userStorage.login)
                .then((user) => {
                    setUserData(user.data);
                })
                .catch(() => {
                    "Пользователя не существует";
                });
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
        localStorage.clear();
    };

    return (
        <UserPageComponent
            user={userData}
            logOutHandler={logOutHandler}
            userInfo={userInfo}
        />
    );
};
