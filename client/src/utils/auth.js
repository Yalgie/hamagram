import axios from 'axios';

export const checkAuth = async () => {
    await axios.post(`/api/v1/auth`).then(res => {
        if (res.data.authenticated) {
            return true;
        }
        else {
            return false;
        }
    }).catch(e => {
        throw e;
    });
}

export const logout = async () => {
    await axios.post(`/api/v1/auth/logout`).then(res => {
        if (res.status === 200) {
            return true;
        }
        else {
            return false;
        }
    }).catch(e => {
        throw e;
    });
}