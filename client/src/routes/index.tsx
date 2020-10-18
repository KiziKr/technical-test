import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import RouteWrapper from './RouteWrapper';
import { UserListPage } from '../pages/UserListPage';
import { DefaultLayout } from '../layouts/DefaultLayout';

const Routes = () => (
    <Router>
        <Switch>
            <RouteWrapper
                exact
                path='/user'
                component={UserListPage}
                layout={DefaultLayout}
            />
        </Switch>
    </Router>
);

export default Routes;