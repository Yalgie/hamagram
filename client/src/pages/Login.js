import React, { Fragment } from "react";
import LoginForm from "../components/LoginForm";
import Typography from '@material-ui/core/Typography';

export default function Login() {
    return (
        <Fragment>
            <Typography variant="h4" component="h1">
                Login
            </Typography>
            <LoginForm />
        </Fragment>
    );
};