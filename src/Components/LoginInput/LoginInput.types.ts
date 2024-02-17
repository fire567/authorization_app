import { Dispatch, SetStateAction } from "react";

export interface LoginInputProps {
    login: string;
    setLogin: Dispatch<SetStateAction<string>>;
}
