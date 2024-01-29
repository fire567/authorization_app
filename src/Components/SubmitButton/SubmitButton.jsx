import { LoadingButton } from "../LoadingButton/LoadingButton";
import "./SubmitButton.css";

export const SubmitButton = ({ isValidPassword, isLoading }) => {
    return (
        <div className="log_in_button_wrapper">
            {isLoading ? (
                <LoadingButton />
            ) : (
                <input
                    type="submit"
                    value="Войти"
                    className={`log_in_button ${
                        isValidPassword ? "active" : "disabled"
                    }`}
                    disabled={!isValidPassword}
                    style={{ backgroundColor: `${isLoading && "red"}` }}
                />
            )}
        </div>
    );
};
