import { FC } from "react";
import { circle, marker_false, marker_true } from "./ValidMarker.style";
import { ValidMarkerProp } from "./ValidMarker.types";

export const ValidMarker: FC<ValidMarkerProp> = ({ isValidPassword }) => {
    return (
        <div>
            <div className={circle(isValidPassword)}>
                <div
                    className={isValidPassword ? marker_true : marker_false}
                ></div>
            </div>
        </div>
    );
};
