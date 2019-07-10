import React, { Fragment, useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, check, getPosts, getHamsters } from "../store/actions";
import Button from '@material-ui/core/Button';

const Menu = ({ auth, logout, check, path, history, getPosts, getHamsters }) => {
    const [checkAuth, setCheckAuth] = useState(true);

    useEffect(() => {
        if (path !== null) {
            history.push(path);
        }
        if (checkAuth) {
            check();
            setCheckAuth(false);
        }

        if (auth) {
            getPosts();
            getHamsters();
        }
    }, [path, checkAuth, history, check, getPosts, getHamsters, auth]);
    // Not really sure why I need to include these
    // React throws an error screaming about infinite loops

    let menuItems = <Fragment>
        <Button variant="contained">
            <Link to="/login">Login</Link>
        </Button>
        <Button variant="contained">
            <Link to="/signup">Register</Link>
        </Button>
    </Fragment>

    if (auth) {
        menuItems = <Fragment>
            <Button variant="contained">
                <Link to="/newPost">New Post</Link>
            </Button>
            <Button variant="contained">
                <Link to="/feed">Feed</Link>
            </Button>
            <Button variant="contained">
                <Link to="/hamsters">Hamsters</Link>
            </Button>
            <Button onClick={logout} variant="contained">
                Logout
            </Button>
        </Fragment>
    }

    return <Fragment>
        <Button variant="contained">
            <Link to="/">Home</Link>
        </Button>

        { menuItems }
    </Fragment>
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
        getHamsters: () => {
            dispatch(getHamsters());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Menu));
