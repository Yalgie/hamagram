import React, { Fragment } from "react";
import FeedPosts from "../components/PostsList";

export default function Feed() {
    return (
        <Fragment>
            <h1>Feed</h1>
            <FeedPosts />
        </Fragment>
    );
};