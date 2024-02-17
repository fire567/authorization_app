import { FC } from "react";
import { HeaderProps } from "./Header.types";
import { user_page_header, log_out_button } from "./Header.style";

export const Header: FC<HeaderProps> = ({ user, logOutHandler }) => {
    return (
        <header className={user_page_header}>
            <span>UserPage: {user && user.login}</span>
            <button className={log_out_button} onClick={() => logOutHandler()}>
                Выйти
            </button>
        </header>
    );
};
