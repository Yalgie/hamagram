import React, { Fragment } from 'react';

const Hamster = ({ id, username, created }) => {

    return (
        <Fragment>
            <p>{username}</p>
            <p>{created}</p>
        </Fragment>
    )
}

export default Hamster;
