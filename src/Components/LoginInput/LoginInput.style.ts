import { css } from "@emotion/css";

export const input_wrapper = css({
    position: "relative",
});

export const input_field = css({
    display: "block",
    height: "25px",
    border: "1px solid #d7d8d9",
    borderRadius: "5px",
    width: "200px",
    marginTop: "5px",
    "&:focus": {
        outline: "none",
        border: "1px solid #52abff",
    },
});
