import React, { Fragment } from "react";
import RegisterForm from "../components/RegisterForm";
import Typography from '@material-ui/core/Typography';

export default function Register() {
    return (
        <Fragment>
            <Typography variant="h4" component="h1">
                Register
            </Typography>
            <RegisterForm />
        </Fragment>
    );
};