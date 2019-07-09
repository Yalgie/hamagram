import React, { Fragment, useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, check, getPosts } from "../store/actions";

const Menu = ({ auth, logout, check, path, history, getPosts }) => {
    const [checkAuth, setCheckAuth] = useState(true);

    useEffect(() => {
        if (path !== null) {
            history.push(path);
        }
        if (checkAuth) {
            check();
            getPosts();
            setCheckAuth(false);
        }
    }, [path, checkAuth, history, check, getPosts]);
    // Not really sure why I need to include these
    // React throws an error screaming about infinite loops

    // Rendering menu UI based on authenticated state from redux
    if (auth) {
        return <Fragment>
            <button><Link to="/posts">My Posts</Link></button>
            <button><Link to="/newPost">New Post</Link></button>
            <button><Link to="/feed">Feed</Link></button>
            <button><Link to="/hamsters">Hamsters</Link></button>
            <button onClick={() => logout()}>Log Out</button>
        </Fragment>
    }
    else {
        return <Fragment>
            <button><Link to="/login">Login</Link></button>
            <button><Link to="/signup">Sign Up</Link></button>
        </Fragment>
    }
};

// Redux Wizardry
// Mapping state to props and passing dispatch functions through
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
        },
        getPosts: () => {
            dispatch(getPosts());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Menu));
