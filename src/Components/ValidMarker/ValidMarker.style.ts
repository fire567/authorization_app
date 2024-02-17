import { css } from "@emotion/css";

export const circle = (isValid?: boolean) =>
    css({
        width: "20px",
        height: "20px",
        borderRadius: "15px",
        position: "absolute",
        left: "215px",
        top: "27px",
        backgroundColor: isValid ? "green" : "#d60229",
        border: "1px solid #d7d8d9",
    });

export const marker_false = css({
    "&:after": {
        content: "''",
        position: "absolute",
        width: "16px",
        height: "3px",
        background: "white",
        top: "8px",
        left: "2px",
        transform: "rotate(-45deg)",
    },
    "&:before": {
        content: "''",
        position: "absolute",
        width: "16px",
        height: "3px",
        background: "white",
        top: "8px",
        left: "2px",
        transform: "rotate(45deg)",
    },
});

export const marker_true = css({
    "&:after": {
        content: "''",
        position: "absolute",
        left: "2px",
        top: "8px",
        width: "7px",
        height: "3px",
        background: "white",
        transform: "rotate(50deg)",
    },
    "&:before": {
        content: "''",
        position: "absolute",
        left: "5px",
        top: "8px",
        width: "13px",
        height: "3px",
        background: "white",
        transform: "rotate(-50deg)",
    },
});
