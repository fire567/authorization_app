import { FC } from "react";
import { LoginInputProps } from "../../ts/interfaces";
import { input_wrapper, input_field } from "./LoginInput.style";

export const LoginInput: FC<LoginInputProps> = ({ login, setLogin }) => {
    return (
        <div className={input_wrapper}>
            <label>Логин:</label>
            <input
                className={input_field}
                type="text"
                onChange={(e) => setLogin(e.target.value)}
                value={login}
            />
        </div>
    );
};
