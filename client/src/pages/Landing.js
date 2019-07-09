import React, { Fragment } from "react";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";

const Landing = () => {
    return (
        <Fragment>
            <h1>Home Page</h1>
            <SignUp />
            <SignIn />
        </Fragment>
    );
};

export default Landing;