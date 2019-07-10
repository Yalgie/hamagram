import React, { Fragment, useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, check, getPosts, getHamsters } from "../store/actions";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Menu = ({ auth, logout, check, path, history, getPosts, getHamsters }) => {
    const [checkAuth, setCheckAuth] = useState(true);
    const classes = useStyles();

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
        <Link className={classes.link} to="/login">
            <Button className={classes.button} variant="contained">
                Login
            </Button>
        </Link>
        <Link className={classes.link} to="/signup">
            <Button className={classes.button} variant="contained">
                Register
            </Button>
        </Link>
    </Fragment>

    if (auth) {
        menuItems = <Fragment>
            <Link className={classes.link} to="/newPost">
                <Button className={classes.button} variant="contained">
                    New Post
                </Button>
            </Link>
            <Link className={classes.link} to="/feed">
                <Button className={classes.button} variant="contained">
                    Feed
                </Button>
            </Link>
            <Link className={classes.link} to="/hamsters">
                <Button className={classes.button} variant="contained">
                    Hamsters
                </Button>
            </Link>
            <Button className={classes.button} onClick={logout} variant="contained">
                Logout
            </Button>
        </Fragment>
    }

    return <Fragment>
        <Link className={classes.link} to="/">
            <Button className={classes.button} variant="contained">
                Home
            </Button>
        </Link>

        { menuItems }
    </Fragment>
};


const useStyles = makeStyles(theme => ({
    button: {
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    link: {
        color: "#333",
        textDecoration: "none"
    }
}));

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
