import { UserData } from "../../Pages/AuthPageController/AuthPageController.types";
import { userInfo } from "../UserInfo/UserInfo.types";

export interface UserPageComponentProps {
    user: UserData | null;
    logOutHandler: () => void;
    userInfo: userInfo[];
}
