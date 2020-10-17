import { randomBytes } from 'crypto';
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing'
import OrphMap from './pages/OrphMap'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
            <Route path="/" exact component={Landing}></Route>
            <Route path="/app" component={OrphMap}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;