import React, { Fragment, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, check } from "../store/actions";
import LoginForm from './LoginForm';

const Menu = ({ auth, msg, logout, check }) => {
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            check()
        }
    });

    if (auth) {
        return <Fragment>
            <p>{msg}</p>
            <button><Link to="/">Home</Link></button>
            <button><Link to="/dash">Dash</Link></button>
            <button onClick={() => logout()}>Log Out</button>
        </Fragment>
    }
    else {
        return <Fragment>
            <p>{msg}</p>
            <button><Link to="/">Home</Link></button>
            <button><Link to="/dash">Dash</Link></button>
            <LoginForm />
        </Fragment>
    }
};

const mapStateToProps = state => {
    return {
        auth: state.auth,
        msg: state.msg
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu);