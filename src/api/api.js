import axios from "axios";

export const getUser = (login) => {
    return axios.get(`https://api.github.com/users/${login}`);
};
