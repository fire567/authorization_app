export const UserInfo = ({ userInfo }) => {
    return (
        <div className="user_info">
            {userInfo &&
                userInfo.map((info) => (
                    <span key={info.id} className="current_info">
                        {info.infoName}: {info.infoValue}
                    </span>
                ))}
        </div>
    );
};
