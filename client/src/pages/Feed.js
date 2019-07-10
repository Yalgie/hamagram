import React, { Fragment } from "react";
import Posts from "../components/Posts";
import Typography from '@material-ui/core/Typography';

export default function Feed() {
    return (
        <Fragment>
            <Typography variant="h4" component="h1">
                Feed
            </Typography>
            <Posts />
        </Fragment>
    );
};