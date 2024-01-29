import { useEffect, useState } from "react";
import {
    lengthCheck,
    upperCaseCheck,
    lowerCaseCheck,
    isNumberCheck,
    isLatinCheck,
    isSpecialSymbol,
} from "../../helpers/helpers";
import { passwordValidator } from "../../helpers/helpers";
import { getUser } from "../../api/api";
import "./AuthPageController.css";
import { AuthPageComponent } from "../../Components/AuthPageComponent/AuthPageComponent";

export const AuthPageController = ({ setUserData }) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [showHint, setShowHint] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [lengthCheckState, setLengthCheckState] = useState(false);
    const [upperCaseCheckState, setUpperCaseCheck] = useState(false);
    const [lowerCaseCheckState, setLowerCaseCheck] = useState(false);
    const [isNumberCheckState, setIsNumberCheck] = useState(false);
    const [isLatinCheckState, setIsLatinCheck] = useState(false);
    const [isSpecialSymbolState, setIsSpecialSymbol] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const authHandler = (e) => {
        if (isValidPassword) {
            setIsLoading(true);
            getUser(login)
                .then((user) => {
                    setUserData(user.data);
                    setIsLoading(false);
                })
                .catch((error) => {
                    if (error.code === "ERR_NETWORK") {
                        setErrorMessage("Отсутствует интернет соединение");
                    } else setErrorMessage("Пользователя не существует");
                });
        } else {
            setErrorMessage("Неверный логин или пароль");
        }
        e.preventDefault();
    };

    useEffect(() => {
        setIsValidPassword(
            passwordValidator(
                password,
                lengthCheckState,
                upperCaseCheckState,
                lowerCaseCheckState,
                isNumberCheckState,
                isLatinCheckState,
                isSpecialSymbolState,
                setErrorMessage
            )
        );
    }, [
        password,
        lengthCheckState,
        upperCaseCheckState,
        lowerCaseCheckState,
        isNumberCheckState,
        isLatinCheckState,
        isSpecialSymbolState,
    ]);

    const passwordHandler = (password) => {
        setPassword(password);

        setLengthCheckState(lengthCheck(password));
        setUpperCaseCheck(upperCaseCheck(password));
        setLowerCaseCheck(lowerCaseCheck(password));
        setIsNumberCheck(isNumberCheck(password));
        setIsLatinCheck(isLatinCheck(password));
        setIsSpecialSymbol(isSpecialSymbol(password));
    };

    return (
        <AuthPageComponent
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
    );
};
