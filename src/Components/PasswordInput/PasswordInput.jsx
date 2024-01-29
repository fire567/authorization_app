import { PasswordPopUp } from "../PasswordPopUp/PasswordPopUp";
import eye_pic from "../../pics/eye.svg";
import { ValidMarker } from "../ValidMarker/ValidMarker";
import "./PasswordInput.css";

export const PasswordInput = ({
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
    showPassword,
    setShowPassword,
}) => {
    return (
        <div className="input_wrapper">
            <label className="label">Пароль:</label>
            <input
                className="input"
                type={showPassword ? "input" : "password"}
                onChange={(e) => passwordHandler(e.target.value)}
                value={password}
                onFocus={() => setShowHint(true)}
                onBlur={() => setShowHint(false)}
            />
            <img
                className="eye_pic"
                src={eye_pic}
                onClick={() => setShowPassword(!showPassword)}
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
                <ValidMarker isValidPassword={isValidPassword} />
            ) : null}
        </div>
    );
};
