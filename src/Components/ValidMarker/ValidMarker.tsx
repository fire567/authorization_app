import { FC } from "react";
import {
    circle_true,
    circle_false,
    marker_false,
    marker_true,
} from "./ValidMarker.style";

interface ValidMarkerProp {
    isValidPassword: boolean | undefined;
}

export const ValidMarker: FC<ValidMarkerProp> = ({ isValidPassword }) => {
    return (
        <div>
            <div className={isValidPassword ? circle_true : circle_false}>
                <div
                    className={isValidPassword ? marker_true : marker_false}
                ></div>
            </div>
        </div>
    );
};
