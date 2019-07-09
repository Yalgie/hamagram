import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Menu from "./Menu";
// import PrivateRoute from "./PrivateRoute";

// Pages
import Landing from "../pages/Landing";
import Dash from "../pages/Dash";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/login" component={Login} />
                <Route path="/dash" component={Dash} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
