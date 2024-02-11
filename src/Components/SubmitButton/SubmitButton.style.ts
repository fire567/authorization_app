import { css, keyframes } from "@emotion/css";

export const log_in_button_wrapper = css({
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
});

export const active = css({
    height: "30px",
    width: "70px",
    cursor: "pointer",
    border: "none",
    color: "white",
    backgroundColor: "#52abff",
    "& :hover": {
        backgroundColor: "#66b0fa",
    },
    "& :active": {
        backgroundColor: "#2a92fa",
    },
});

export const disabled = css({
    height: "30px",
    width: "70px",
    cursor: "pointer",
    border: "none",
    color: "white",
    backgroundColor: "#ccd1d9",
});

const spin = keyframes({
    "0%": {
        transform: "rotate(0deg)",
    },
    "100%": {
        transform: "rotate(360deg)",
    },
});

export const loading_img = css({
    position: "absolute",
    animation: `${spin} 2s linear infinite`,
});

export const hidden = css({
    display: "none",
});
