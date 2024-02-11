import { css } from "@emotion/css";

export const form_wrapper = css({
    position: "relative",
    width: "300px",
    height: "300px",
    border: "1px solid #d7d8d9",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
});

export const enter_header = css({
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
});

export const error_message = css({
    position: "absolute",
    color: "#d60229",
    bottom: "55px",
});
