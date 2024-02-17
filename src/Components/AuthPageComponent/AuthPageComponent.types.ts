import { Dispatch, SetStateAction } from "react";
import { PasswordInputProps } from "../PasswordInput/PasswordInput.types";

export interface AuthPageComponentProps extends PasswordInputProps {
    authHandler: React.FormEventHandler<HTMLFormElement>;
    login: string;
    setLogin: Dispatch<SetStateAction<string>>;
    isLoading: boolean;
    errorMessage: string;
}
