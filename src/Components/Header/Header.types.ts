import { UserData } from "../../Pages/AuthPageController/AuthPageController.types";

export interface HeaderProps {
    user: UserData | null;
    logOutHandler: () => void;
}
