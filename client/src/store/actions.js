import axios from 'axios';

/* 
    All these async function perform an axios get/post req
    once they're done it will dispatch an event to the
    redux producers and update the global state, if we update
    the path object, react will redirect to the path using the
    withRouter method (see Menu.js useEffect() method for this).

    type refers to the reducer type we want to dispatch to - see
    ./reducers.js
*/
const login = (username, password) => {
    return async (dispatch) => {
        const res = await axios.post(`/api/v1/auth/login`, {
            username,
            password
        });

        let path = null;

        if (res.data.authenticated) {
            path = "/user";
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

// Checks if there is a current authenticated session
const check = () => {
    return async (dispatch) => {
        const res = await axios.post(`/api/v1/auth/`);

        dispatch({
            type: "SET_AUTH",
            auth: res.data.authenticated,
            msg: res.data.message,
            username: res.data.username,
            path: null
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
            path = "/user";
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

// Gets ALL posts
const getPosts = () => {
    return async (dispatch) => {
        const res = await axios.get(`/api/v1/post`);

        dispatch({
            type: "SET_POSTS",
            posts: res.data.posts
        })
    }
}

// Gets ALL hamsters
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
