import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

// Checks if the user is logged in and if not redirects them back to the login page
const PrivateRoute = ({ component: Component, path, auth }) => {
    return <Route path={path} render={() => (
        auth
        ? <Component />
        : <Redirect to='/login' />
    )} />
};

// Redux Wizardry
// Mapping state to props and passing dispatch functions through
// No dispatch events for this component
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(PrivateRoute);