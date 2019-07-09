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
            username: res.data.username,
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
            username: res.data.username,
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
            username: res.data.username,
            path: path
        })
    }
}

const createUser = (username, password) => {
    return async (dispatch) => {
        const res = await axios.post(`/api/v1/hamster`, {
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
            username: res.data.username,
            path: path
        })
    }
}

const getPosts = () => {
    return async (dispatch) => {
        const res = await axios.get(`/api/v1/post`);

        dispatch({
            type: "SET_POSTS",
            posts: res.data.posts
        })
    }
}

const getHamsters = () => {
    return async (dispatch) => {
        const res = await axios.get(`/api/v1/hamster/all`);

        dispatch({
            type: "SET_HAMSTERS",
            hamsters: res.data.hamsters
        })
    }
}

export { login, logout, check, createUser, getPosts, getHamsters };
