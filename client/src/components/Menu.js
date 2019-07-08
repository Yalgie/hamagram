import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <Fragment>
            <button><Link to="/">Home</Link></button>
        </Fragment>
    )
};

export default Menu;