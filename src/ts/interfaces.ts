import { UserPageComponent } from "./../Components/UserPageComponent/UserPageComponent";
import { Dispatch, SetStateAction } from "react";

export interface UserData {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string | null;
    company: string | null;
    blog: string;
    location: string | null;
    email: string | null;
    hireable: string | null;
    bio: string | null;
    twitter_username: string | null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
}

export interface AuthPageComponentProps {
    authHandler: (e: { preventDefault: () => void }) => void;
    login: string;
    setLogin: Dispatch<SetStateAction<string>>;
    password: string;
    passwordHandler: (password: string) => void;
    setShowHint: Dispatch<SetStateAction<boolean>>;
    isValidPassword: boolean | undefined;
    lengthCheckState: boolean | undefined;
    upperCaseCheckState: boolean | undefined;
    lowerCaseCheckState: boolean | undefined;
    isNumberCheckState: boolean | undefined;
    isLatinCheckState: boolean | undefined;
    isSpecialSymbolState: boolean | undefined;
    showHint: boolean;
    errorMessage: string;
    showPassword: boolean;
    setShowPassword: Dispatch<SetStateAction<boolean>>;
    isLoading: boolean;
}

export interface LoginInputProps {
    login: string;
    setLogin: Dispatch<SetStateAction<string>>;
}

export interface SubmitButtonProps {
    isValidPassword: boolean | undefined;
    isLoading: boolean;
}

export interface PasswordInputProps {
    password: string;
    passwordHandler: (password: string) => void;
    setShowHint: Dispatch<SetStateAction<boolean>>;
    isValidPassword: boolean | undefined;
    lengthCheckState: boolean | undefined;
    upperCaseCheckState: boolean | undefined;
    lowerCaseCheckState: boolean | undefined;
    isNumberCheckState: boolean | undefined;
    isLatinCheckState: boolean | undefined;
    isSpecialSymbolState: boolean | undefined;
    showHint: boolean;
    showPassword: boolean;
    setShowPassword: Dispatch<SetStateAction<boolean>>;
}

export interface PasswordPopUpProps {
    lengthCheckState: boolean | undefined;
    upperCaseCheckState: boolean | undefined;
    lowerCaseCheckState: boolean | undefined;
    isNumberCheckState: boolean | undefined;
    isLatinCheckState: boolean | undefined;
    isSpecialSymbolState: boolean | undefined;
}

export interface userInfo {
    id: number;
    infoName: string;
    infoValue: number | null;
}

export interface UserPageComponentProps {
    user: UserData | null;
    logOutHandler: () => void;
    userInfo: userInfo[];
}

export interface HeaderProps {
    user: UserData | null;
    logOutHandler: () => void;
}

export interface UserInfoProps {
    userInfo: userInfo[];
}
