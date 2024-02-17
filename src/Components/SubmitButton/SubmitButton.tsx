import { FC } from "react";
import { SubmitButtonProps } from "./SubmitButton.types";
import {
    log_in_button_wrapper,
    active,
    disabled,
    loading_img,
    hidden,
} from "./SubmitButton.style";
import loading from "../../pics/loading.svg";

export const SubmitButton: FC<SubmitButtonProps> = ({
    isValidPassword,
    isLoading,
}) => {
    return (
        <div className={log_in_button_wrapper}>
            <input
                type="submit"
                value={isLoading ? "" : "Войти"}
                className={isValidPassword ? active : disabled}
                disabled={!isValidPassword}
                style={{ backgroundColor: `${isLoading && disabled}` }}
            />
            <img className={isLoading ? loading_img : hidden} src={loading} />
        </div>
    );
};
