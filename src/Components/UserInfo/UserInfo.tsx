import { FC } from "react";
import { UserInfoProps } from "./UserInfo.types";
import { current_info } from "./UserInfo.style";

export const UserInfo: FC<UserInfoProps> = ({ userInfo }) => {
    return (
        <div>
            {userInfo &&
                userInfo.map((info) => (
                    <span key={info.id} className={current_info}>
                        {info.infoName}: {info.infoValue}
                    </span>
                ))}
        </div>
    );
};
