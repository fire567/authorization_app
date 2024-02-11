import { css } from "@emotion/css";

export const user_pic = css({
    width: "200px",
    height: "200px",
    border: "1px solid black",
    marginLeft: "40px",
    marginTop: "40px",
    "@media screen and (max-width: 1100px)": {
        marginLeft: "0px",
    },
});
