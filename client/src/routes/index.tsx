import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import RouteWrapper from './RouteWrapper';
import { UserListPage } from '../pages/UserListPage';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { AuthLayout } from '../layouts/AuthLayout';
import UserCreate from '../components/users/UserCreate';

const Routes = () => (
    <Router>
        <Switch>
            <RouteWrapper
                exact
                path='/user'
                component={UserListPage}
                layout={DefaultLayout}
            />
            <RouteWrapper
                exact
                path='/user/signup'
                component={UserCreate}
                layout={AuthLayout}
            />
        </Switch>
    </Router>
);

export default Routes;