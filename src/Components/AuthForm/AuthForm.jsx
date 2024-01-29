import { LoginInput } from "../LoginInput/LoginInput";
import { PasswordInput } from "../PasswordInput/PasswordInput";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import "./AuthForm.css";

export const AuthForm = ({
    authHandler,
    login,
    setLogin,
    password,
    passwordHandler,
    setShowHint,
    isValidPassword,
    lengthCheckState,
    upperCaseCheckState,
    lowerCaseCheckState,
    isNumberCheckState,
    isLatinCheckState,
    isSpecialSymbolState,
    showHint,
    errorMessage,
    showPassword,
    setShowPassword,
    isLoading,
}) => {
    return (
        <form className="form_wrapper" onSubmit={authHandler}>
            <div className="enter_header">Вход</div>
            <LoginInput login={login} setLogin={setLogin} />
            <PasswordInput
                password={password}
                passwordHandler={passwordHandler}
                setShowHint={setShowHint}
                isValidPassword={isValidPassword}
                lengthCheckState={lengthCheckState}
                upperCaseCheckState={upperCaseCheckState}
                lowerCaseCheckState={lowerCaseCheckState}
                isNumberCheckState={isNumberCheckState}
                isLatinCheckState={isLatinCheckState}
                isSpecialSymbolState={isSpecialSymbolState}
                showHint={showHint}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
            />
            {errorMessage ? (
                <div className="error_message">{errorMessage}</div>
            ) : null}
            <SubmitButton
                isValidPassword={isValidPassword}
                isLoading={isLoading}
            />
        </form>
    );
};
