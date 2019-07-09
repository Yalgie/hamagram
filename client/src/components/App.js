import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Menu from "./Menu";
import PrivateRoute from "./PrivateRoute";
// PrivateRoute only allows authenticated users to hit it

// Pages
import Landing from "../pages/Landing";
import Dash from "../pages/Dash";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import Feed from "../pages/Feed";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";

// Standard react router bidness
// Rendering a 404 component if no routes are matched
function App() {
    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <PrivateRoute path="/dash" component={Dash} />
                <PrivateRoute path="/posts" component={Posts} />
                <PrivateRoute path="/feed" component={Feed} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
