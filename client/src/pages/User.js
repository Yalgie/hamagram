import React, { Fragment } from 'react';
import UserData from "../components/UserData";
import Typography from '@material-ui/core/Typography';

export default function User() {
    return (
        <Fragment>
            <Typography variant="h4" component="h1">
                User
            </Typography>
            <UserData />
        </Fragment>
    );
};