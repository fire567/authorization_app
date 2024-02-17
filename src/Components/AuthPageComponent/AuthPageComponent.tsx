import { AuthForm } from "../AuthForm/AuthForm";
import { FC } from "react";
import { AuthPageComponentProps } from "./AuthPageComponent.types";
import { AuthPage_wrapper } from "./AuthPageComponent.style";

const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
    return <div className={AuthPage_wrapper}>{children}</div>;
};

export const AuthPageComponent: FC<AuthPageComponentProps> = (props) => {
    return (
        <LayoutComponent>
            <AuthForm {...props} />
        </LayoutComponent>
    );
};
