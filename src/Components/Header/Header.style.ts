import { css } from "@emotion/css";

export const user_page_header = css({
    height: "60px",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 20px",
    borderBottom: "1px solid #d7d8d9",
});

export const log_out_button = css({
    height: "30px",
    width: "70px",
    backgroundColor: "#52abff",
    cursor: "pointer",
    border: "none",
    color: "white",
    "& :hover": {
        backgroundColor: "#66b0fa",
    },
    "& :active": {
        backgroundColor: "#2a92fa",
    },
});
