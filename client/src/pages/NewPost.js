import React, { Fragment } from "react";
import PostForm from "../components/PostForm";
import Typography from '@material-ui/core/Typography';

export default function NewPost() {
    return (
        <Fragment>
            <Typography variant="h4" component="h1">
                New Post
            </Typography>
            <PostForm />
        </Fragment>
    );
};