import { FC } from "react";
import { error_page_wrapper, error_page_message } from "./ErrorPage.styles";

export const ErrorPage: FC = () => {
    return (
        <div className={error_page_wrapper}>
            <span className={error_page_message}> Ошибка 404 </span>
        </div>
    );
};
