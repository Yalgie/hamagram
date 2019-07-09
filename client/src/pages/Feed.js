import React, { Fragment } from "react";
import Posts from "../components/Posts";

const Post = () => {
    return (
        <Fragment>
            <h1>Posts</h1>
            <p>Thumbs Up/Down Posts</p>
            <p>Share Post</p>
            <Posts />
        </Fragment>
    );
};

export default Post;