import { css } from "@emotion/css";

export const current_info = css({
    display: "block",
    "&:first-child": {
        marginRight: "40px",
        marginTop: "40px",
        "@media screen and (max-width: 1100px)": {
            marginRight: "0px",
        },
    },
});

export const user_info_block = css({});
