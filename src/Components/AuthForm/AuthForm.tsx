import { FC } from "react";
import { AuthPageComponentProps } from "../../ts/interfaces";
import { LoginInput } from "../LoginInput/LoginInput";
import { PasswordInput } from "../PasswordInput/PasswordInput";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { error_message, form_wrapper, enter_header } from "./AuthForm.styles";

export const AuthForm: FC<AuthPageComponentProps> = ({
    authHandler,
    login,
    setLogin,
    isLoading,
    errorMessage,
    isValidPassword,
    ...rest
}) => {
    return (
        <form className={form_wrapper} onSubmit={authHandler}>
            <div className={enter_header}>Вход</div>
            <LoginInput login={login} setLogin={setLogin} />
            <PasswordInput isValidPassword={isValidPassword} {...rest} />
            {errorMessage ? (
                <div className={error_message}>{errorMessage}</div>
            ) : null}
            <SubmitButton
                isValidPassword={isValidPassword}
                isLoading={isLoading}
            />
        </form>
    );
};
