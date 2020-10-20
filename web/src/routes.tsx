import { randomBytes } from 'crypto';
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import OrphMap from './pages/OrphMap';
import Orphanage from './pages/Orphanage';
import CreateOrph from './pages/CreateOrphanage';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
            <Route path="/" exact component={Landing}></Route>
            <Route path="/app" component={OrphMap}></Route>
            <Route path="/orph/create" component={CreateOrph}></Route>
            <Route path="/orph/:id" component={Orphanage}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;