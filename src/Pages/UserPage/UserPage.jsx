import user_pic from "../../pics/pic.jpg";
import "./UserPage.css";

const UserPage = ({ setUserData }) => {
    const user = JSON.parse(localStorage.getItem("user"));

    const userInfo = [
        {
            id: 0,
            infoName: "Публичные репозитории",
            infoValue: user ? user.public_repos : null,
        },
        {
            id: 1,
            infoName: "Подписчики",
            infoValue: user ? user.followers : null,
        },
        {
            id: 2,
            infoName: "Подписан на",
            infoValue: user ? user.following : null,
        },
    ];

    const logOutHandler = () => {
        localStorage.clear();
        setUserData(false);
    };

    return user ? (
        <div className="user_page_wrapper">
            <header className="user_page_header">
                <span className="page_name">UserPage: {user.login}</span>
                <button className="log_out_button" onClick={logOutHandler}>
                    Выйти
                </button>
            </header>
            <div className="user_info_wrapper">
                <div className="user_info_block">
                    <img className="user_pic" src={user_pic} alt="user pic" />
                    <div className="user_info">
                        {userInfo &&
                            userInfo.map((info) => (
                                <span key={info.id} className="current_info">
                                    {info.infoName}: {info.infoValue}
                                </span>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};

export default UserPage;
