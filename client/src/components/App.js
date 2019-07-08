import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Menu from "./Menu";
import Landing from "../pages/Landing";
import NotFound from "../pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route exact path="/" component={Landing} />
                {/* <Route path="/" component={} /> */}
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
