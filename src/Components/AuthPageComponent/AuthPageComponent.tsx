import { AuthForm } from "../AuthForm/AuthForm";
import { FC } from "react";
import { AuthPageComponentProps } from "../../ts/interfaces";
import { AuthPage_wrapper } from "./AuthPageComponent.style";

const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
    return <div className={AuthPage_wrapper}>{children}</div>;
};

/* authHandler,
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
    isLoading,*/

/*authHandler={authHandler}
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
                isLoading={isLoading}*/

export const AuthPageComponent: FC<AuthPageComponentProps> = (props) => {
    return (
        <LayoutComponent>
            <AuthForm {...props} />
        </LayoutComponent>
    );
};
