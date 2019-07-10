import React, { Fragment, useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout, check, getPosts, getHamsters } from "../store/actions";
import Button from '@material-ui/core/Button';
import Menu_UI from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Menu = ({ auth, logout, check, path, history, getPosts, getHamsters }) => {
    const [checkAuth, setCheckAuth] = useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

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

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }
    
    function handleClose() {
        setAnchorEl(null);
    }

    let menuItems = <Fragment>
        <MenuItem onClick={handleClose}>
            <Link to="/login">Login</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <Link to="/signup">Sign Up</Link>
        </MenuItem>
    </Fragment>

    if (auth) {
        menuItems = <Fragment>
            <MenuItem onClick={handleClose}>
                <Link to="/newPost">New Post</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Link to="/feed">Feed</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Link to="/hamsters">Hamsters</Link>
            </MenuItem>
            <MenuItem onClick={() => {
                handleClose();
                logout();
            }}>
                Log Out
            </MenuItem>
        </Fragment>
    }

    return <Fragment>
        <Button 
            aria-controls="simple-menu" 
            aria-haspopup="true" 
            onClick={handleClick}
        >
            Open Menu
        </Button>
        <Menu_UI
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            {menuItems}
        </Menu_UI>
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
