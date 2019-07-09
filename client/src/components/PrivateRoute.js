import React from "react";
import { Route, Redirect } from "react-router-dom";
import { checkAuth } from "../utils/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = checkAuth();

    return <Route {...rest} render={(props) => (
        isAuthenticated
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
};

export default PrivateRoute;