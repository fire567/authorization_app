import { Dispatch, SetStateAction } from "react";
import { UserData } from "../AuthPageController/AuthPageController.types";

export interface UserPageControllerProps {
    setUserData: Dispatch<SetStateAction<null>>;
    userData: UserData | null;
}
