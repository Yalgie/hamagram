import axios from 'axios';

const login = (username, password) => {
    return async (dispatch) => {
        const res = await axios.post(`/api/v1/auth/login`, {
            username,
            password
        });

        dispatch({
            type: "SET_AUTH",
            auth: res.data.authenticated,
            msg: res.data.message
        })
    }
}

const logout = () => {
    return async (dispatch) => {
        const res = await axios.post(`/api/v1/auth/logout`);

        dispatch({
            type: "SET_AUTH",
            auth: res.data.authenticated,
            msg: "Logged Out"
        })
    }
}

const check = () => {
    return async (dispatch) => {
        const res = await axios.post(`/api/v1/auth/`);

        dispatch({
            type: "SET_AUTH",
            auth: res.data.authenticated,
            msg: res.data.message
        })
    }
}

export { login, logout, check };