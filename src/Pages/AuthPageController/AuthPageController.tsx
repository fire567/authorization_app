import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import {
    lengthCheck,
    upperCaseCheck,
    lowerCaseCheck,
    isNumberCheck,
    isLatinCheck,
    isSpecialSymbol,
    passwordValidator,
} from "../../helpers/helpers";
import { getUser } from "../../api/api";
import { AuthPageComponent } from "../../Components/AuthPageComponent/AuthPageComponent";
import { useNavigate } from "react-router-dom";
import { UserData } from "../../ts/interfaces";

interface User {
    userData: UserData | null;
    setUserData: Dispatch<SetStateAction<null>>;
}

export const AuthPageController: FC<User> = ({ userData, setUserData }) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [showHint, setShowHint] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [isValidPassword, setIsValidPassword] = useState<boolean | undefined>(
        false
    );
    const [lengthCheckState, setLengthCheckState] = useState<
        boolean | undefined
    >(false);
    const [upperCaseCheckState, setUpperCaseCheck] = useState<
        boolean | undefined
    >(false);
    const [lowerCaseCheckState, setLowerCaseCheck] = useState<
        boolean | undefined
    >(false);
    const [isNumberCheckState, setIsNumberCheck] = useState<
        boolean | undefined
    >(false);
    const [isLatinCheckState, setIsLatinCheck] = useState<boolean | undefined>(
        false
    );
    const [isSpecialSymbolState, setIsSpecialSymbol] = useState<
        boolean | undefined
    >(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("user")) {
            navigate("/user");
        }
    }, [userData]);

    const authHandler = (e: { preventDefault: () => void }) => {
        if (isValidPassword) {
            setIsLoading(true);
            getUser(login)
                .then((user) => {
                    localStorage.setItem("user", JSON.stringify(user.data));
                    setUserData(user.data);
                })
                .catch((error) => {
                    if (error.code === "ERR_NETWORK") {
                        setErrorMessage("Отсутствует интернет соединение");
                    } else setErrorMessage("Пользователя не существует");
                })
                .finally(() => {
                    setIsLoading(false);
                });
        } else {
            setErrorMessage("Неверный логин или пароль");
        }
        e.preventDefault();
    };

    useEffect(() => {
        return setIsValidPassword(
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

    const passwordHandler = (password: string) => {
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
