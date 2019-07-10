import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from "./Menu";
import PrivateRoute from "./PrivateRoute";

// Pages
import Home from "../../pages/Home";
import User from "../../pages/User";
import Login from "../../pages/Login";
import NewPost from "../../pages/NewPost";
import Hamsters from "../../pages/Hamsters";
import Feed from "../../pages/Feed";
import Register from "../../pages/Register";
import NotFound from "../../pages/NotFound";

// Standard react router bidness
// Rendering a 404 component if no routes are matched
// PrivateRoute only allows authenticated users to hit the content
export default function Routes() {
    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <PrivateRoute path="/User" component={User} />
                <PrivateRoute path="/hamsters" component={Hamsters} />
                <PrivateRoute path="/newPost" component={NewPost} />
                <PrivateRoute path="/feed" component={Feed} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};
