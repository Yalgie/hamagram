import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Menu from "./Menu";
import PrivateRoute from "./PrivateRoute";

// Pages
import Landing from "../pages/Landing";
import Dash from "../pages/Dash";
import Login from "../pages/Login";
import NewPost from "../pages/NewPost";
import Hamsters from "../pages/Hamsters";
import Feed from "../pages/Feed";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";

// Standard react router bidness
// Rendering a 404 component if no routes are matched
// PrivateRoute only allows authenticated users to hit the content
function App() {
    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <PrivateRoute path="/dash" component={Dash} />
                <PrivateRoute path="/hamsters" component={Hamsters} />
                <PrivateRoute path="/newPost" component={NewPost} />
                <PrivateRoute path="/feed" component={Feed} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
