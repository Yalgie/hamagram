import React, { Fragment } from 'react';

export default function Hamster({ username, created }) {

    return (
        <Fragment>
            <p>{username}</p>
            <p>{created}</p>
        </Fragment>
    )
}
