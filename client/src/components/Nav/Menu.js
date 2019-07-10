import React, { Fragment, useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, check, getPosts, getHamsters } from "../../store/actions";
import Button from '@material-ui/core/Button';
import useStyles from "../Styles/menu";

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

    const ButtonLink = ({ path, text }) => {
        return <Link className={classes.link} to={path}>
            <Button className={classes.button} variant="contained">
                {text}
            </Button>
        </Link>
    }

    let menuItems = <Fragment>
        <ButtonLink path="/login" text="Login" />
        <ButtonLink path="/register" text="Register" />
    </Fragment>

    if (auth) {
        menuItems = <Fragment>
            <ButtonLink path="/user" text="User" />
            <ButtonLink path="/newPost" text="New Post" />
            <ButtonLink path="/feed" text="Feed" />
            <ButtonLink path="/hamsters" text="Hamsters" />
            
            <Button className={classes.button} onClick={logout} variant="contained">
                Logout
            </Button>
        </Fragment>
    }

    return <Fragment>
        <ButtonLink path="/" text="Home" />
        {menuItems}
    </Fragment>
};

// Redux Wizardry
const mapStateToProps = state => {
    return {
        auth: state.auth,
        path: state.path,
    }
};

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
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Menu));
