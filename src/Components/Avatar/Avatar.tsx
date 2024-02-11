import { user_pic } from "./Avatar.style";

export const Avatar = ({ avatar }: { avatar: string }) => {
    return <img className={user_pic} src={avatar} alt="user pic" />;
};
