import axios from 'axios';

const login = (username, password) => {
    return async (dispatch) => {
        const res = await axios.post(`/api/v1/auth/login`, {
            username,
            password
        });

        let path = null;

        if (res.data.authenticated) {
            path = "/dash";
        }

        dispatch({
            type: "SET_AUTH",
            auth: res.data.authenticated,
            msg: res.data.message,
            path: path
        })
    }
}

const logout = () => {
    return async (dispatch) => {
        const res = await axios.post(`/api/v1/auth/logout`);

        let path = null;

        if (!res.data.authenticated) {
            path = "/";
        }

        dispatch({
            type: "SET_AUTH",
            auth: res.data.authenticated,
            msg: "Logged Out",
            path: path
        })
    }
}

const check = () => {
    return async (dispatch) => {
        const res = await axios.post(`/api/v1/auth/`);

        let path = null;

        if (res.data.authenticated) {
            path = "/dash";
        }

        dispatch({
            type: "SET_AUTH",
            auth: res.data.authenticated,
            msg: res.data.message,
            path: path
        })
    }
}

export { login, logout, check };