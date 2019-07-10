import React, { Fragment } from "react";
import PostForm from "../components/Forms/PostForm";

export default function NewPost() {
    return (
        <Fragment>
            <h1>Create a New Post</h1>
            <p>Enter your post title and then enter your post content using markdown.</p>
            <PostForm />
        </Fragment>
    );
};
