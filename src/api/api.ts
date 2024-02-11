import axios from "axios";

export const getUser = (login: string) => {
    return axios.get(`https://api.github.com/users/${login}`);
};
