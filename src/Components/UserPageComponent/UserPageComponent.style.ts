import { css, keyframes } from "@emotion/css";

const spin = keyframes({
    "0%": {
        transform: "rotate(0deg)",
    },
    "100%": {
        transform: "rotate(360deg)",
    },
});

export const loading_page_img = css({
    width: "70px",
    height: "70px",
    animation: `${spin} 2s linear infinite`,
});

export const user_page_wrapper = css({
    width: "100vw",
    height: "100vh",
});

export const user_info_wrapper = css({
    height: "calc(100vh - 61px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

export const user_info_block = css({
    width: "calc(100vw / 2)",
    height: "calc(100vh - 111px)",
    backgroundColor: "white",
    border: "1px solid #d7d8d9",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
    "@media screen and (max-width: 1100px)": {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
    },
});
