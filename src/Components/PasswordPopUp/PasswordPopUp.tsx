import { FC } from "react";
import { PasswordPopUpProps } from "./PasswordPopUp.types";
import {
    pop_up_wrapper,
    correct_password,
    wrong_password,
} from "./PasswordPopUp.styles";

export const PasswordPopUp: FC<PasswordPopUpProps> = ({
    lengthCheckState,
    upperCaseCheckState,
    lowerCaseCheckState,
    isNumberCheckState,
    isLatinCheckState,
    isSpecialSymbolState,
}) => {
    const passwordRequirements = [
        { id: 0, requierment: lengthCheckState, text: "Длина > 8" },
        {
            id: 1,
            requierment: upperCaseCheckState,
            text: "Минимум 1 заглавный символ",
        },
        {
            id: 2,
            requierment: lowerCaseCheckState,
            text: "Минимум 1 строчный символ",
        },
        { id: 3, requierment: isNumberCheckState, text: "Минимум 1 число" },
        { id: 4, requierment: isLatinCheckState, text: "Латинские символы" },
        {
            id: 5,
            requierment: isSpecialSymbolState,
            text: "минимум 1 специальный символ",
        },
    ];

    return (
        <div className={pop_up_wrapper}>
            <div>Должен содержать:</div>
            {passwordRequirements.map((requirement) => (
                <div
                    key={requirement.id}
                    className={
                        requirement.requierment
                            ? correct_password
                            : wrong_password
                    }
                >
                    {requirement.text}
                </div>
            ))}
        </div>
    );
};
