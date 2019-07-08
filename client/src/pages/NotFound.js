import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <Fragment>
            <h1>404</h1>
            <button><Link to="/">Return Home</Link></button>
        </Fragment>
    );
};

export default NotFound;