import { Dispatch, SetStateAction } from "react";
import { PasswordPopUpProps } from "../PasswordPopUp/PasswordPopUp.types";

export interface PasswordInputProps extends PasswordPopUpProps {
    password: string;
    passwordHandler: (password: string) => void;
    setShowHint: Dispatch<SetStateAction<boolean>>;
    isValidPassword: boolean;
    showHint: boolean;
    showPassword: boolean;
    setShowPassword: Dispatch<SetStateAction<boolean>>;
}
