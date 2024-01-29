import { AuthForm } from "../AuthForm/AuthForm";
import "./AuthPageComponent.css";

export const AuthPageComponent = ({
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
        <div className="AuthPage_wrapper">
            <AuthForm
                authHandler={authHandler}
                login={login}
                setLogin={setLogin}
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
                errorMessage={errorMessage}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                isLoading={isLoading}
            />
        </div>
    );
};
