import React, { Fragment } from 'react';

const Posts = ({ id, title, username, content, created}) => {

    return (
        <Fragment>
            <h1>{title}</h1>
            <p>{username}</p>
            {content}
            <p>{created}</p>
        </Fragment>
    )
}

export default Posts;
