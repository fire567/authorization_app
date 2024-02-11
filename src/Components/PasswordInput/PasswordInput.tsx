import { PasswordPopUp } from "../PasswordPopUp/PasswordPopUp";
import { ValidMarker } from "../ValidMarker/ValidMarker";
import { FC } from "react";
import { PasswordInputProps } from "../../ts/interfaces";
import { input_wrapper, input_field, eye_pic } from "./PasswordInput.styles";
import eye from "../../pics/eye.svg";

export const PasswordInput: FC<PasswordInputProps> = ({
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
        <div className={input_wrapper}>
            <label>Пароль:</label>
            <input
                className={input_field}
                type={showPassword ? "input" : "password"}
                onChange={(e) => passwordHandler(e.target.value)}
                value={password}
                onFocus={() => setShowHint(true)}
                onBlur={() => setShowHint(false)}
            />
            <img
                className={eye_pic}
                src={eye}
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
