import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { logout } from "../utils/auth";

const Menu = () => {
    return (
        <Fragment>
            <button><Link to="/">Home</Link></button>
            <button><Link to="/dash">Dash</Link></button>
            <button onClick={() => logout()}>Log Out</button>
        </Fragment>
    )
};

export default Menu;