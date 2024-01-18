import { useEffect, useState } from "react";
import PasswordPopUp from "../../Components/PasswordPopUp/PasswordPopUp";
import axios from "axios";
import {
    lengthCheck,
    upperCaseCheck,
    lowerCaseCheck,
    isNumberCheck,
    isLatinCheck,
    isSpecialSymbol,
} from "../../helpers/helpers";
import "./AuthPage.css";

const AuthPage = ({ setUserData }) => {
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

    const authHandler = (e) => {
        if (isValidPassword) {
            axios
                .get(`https://api.github.com/users/${login}`)
                .then((user) => {
                    setUserData(user.data);
                })
                .catch(() => setErrorMessage("Пользователя не существует"));
        } else {
            setErrorMessage("Неверный логин или пароль");
        }
        e.preventDefault();
    };

    useEffect(() => {
        if (password.length > 0) {
            if (
                lengthCheckState &&
                upperCaseCheckState &&
                lowerCaseCheckState &&
                isNumberCheckState &&
                isLatinCheckState &&
                isSpecialSymbolState
            ) {
                setErrorMessage("");
                setIsValidPassword(true);
            } else {
                setIsValidPassword(false);
            }
        }
    }, [password]);

    const passwordHandler = (password) => {
        setPassword(password);

        lengthCheck(password, setLengthCheckState);
        upperCaseCheck(password, setUpperCaseCheck);
        lowerCaseCheck(password, setLowerCaseCheck);
        isNumberCheck(password, setIsNumberCheck);
        isLatinCheck(password, setIsLatinCheck);
        isSpecialSymbol(password, setIsSpecialSymbol);
    };

    return (
        <div className="AuthPage_wrapper">
            <form className="form_wrapper" onSubmit={authHandler}>
                <div className="enter_header">Вход</div>
                <div className="input_wrapper">
                    <label className="label">Логин:</label>
                    <input
                        className="input"
                        type="text"
                        onChange={(e) => setLogin(e.target.value)}
                        value={login}
                    />
                </div>
                <div className="input_wrapper">
                    <label className="label">Пароль:</label>
                    <input
                        className="input"
                        type="password"
                        onChange={(e) => passwordHandler(e.target.value)}
                        value={password}
                        onFocus={() => setShowHint(true)}
                        onBlur={() => setShowHint(false)}
                    />
                    {showHint && (
                        <PasswordPopUp
                            lengthCheckState={lengthCheckState}
                            upperCaseCheckState={upperCaseCheckState}
                            lowerCaseCheckState={lowerCaseCheckState}
                            isNumberCheckState={isNumberCheckState}
                            isLatinCheckState={isLatinCheckState}
                            isSpecialSymbolState={isSpecialSymbolState}
                        />
                    )}
                    {password.length > 0 ? (
                        <div className="valid_marker">
                            <div className={`circle ${isValidPassword}`}>
                                <div
                                    className={`marker ${isValidPassword}`}
                                ></div>
                            </div>
                        </div>
                    ) : null}
                </div>
                {errorMessage ? (
                    <div className="error_message">{errorMessage}</div>
                ) : null}
                <div className="log_in_button_wrapper">
                    <input
                        type="submit"
                        value="Войти"
                        className="log_in_button"
                    />
                </div>
            </form>
        </div>
    );
};

export default AuthPage;
