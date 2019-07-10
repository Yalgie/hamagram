import React, { Fragment } from "react";
import SignUpForm from "../components/SignUpForm";
import Typography from '@material-ui/core/Typography';

const Landing = () => {
    return (
        <Fragment>
            <Typography variant="h4" component="h1">
                Register
            </Typography>
            <SignUpForm />
        </Fragment>
    );
};

export default Landing;