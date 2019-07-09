import React, { Fragment, useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, check } from "../store/actions";

const Menu = ({ auth, msg, logout, check, path, history }) => {
    const [checkAuth, setCheckAuth] = useState(true);

    useEffect(() => {
        if (path !== null) {
            history.push(path);
        }
        if (checkAuth) {
            check();
            setCheckAuth(false);
        }
    }, [path, checkAuth, history, check]);

    if (auth) {
        return <Fragment>
            <p>{msg}</p>
            <button><Link to="/dash">Dash</Link></button>
            <button onClick={() => logout()}>Log Out</button>
        </Fragment>
    }
    else {
        return <Fragment>
            <p>{msg}</p>
            <button><Link to="/login">Login</Link></button>
        </Fragment>
    }
};

const mapStateToProps = state => {
    return {
        auth: state.auth,
        msg: state.msg,
        path: state.path
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => {
            dispatch(logout());
        },
        check: () => {
            dispatch(check());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Menu));