import React from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import RouteWrapper from './RouteWrapper';
import { UserListPage } from '../pages/UserListPage';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { AuthLayout } from '../layouts/AuthLayout';
import { UserCreatePage } from '../pages/UserCreatePage';
import { NotFoundPage } from '../pages/NotFoundPage';

const Routes = () => (
    <Router>
        <Switch>
            <Redirect
                exact
                from='/'
                to={`/user`}
            />
            <RouteWrapper
                exact
                path='/user'
                component={UserListPage}
                layout={DefaultLayout}
            />
            <RouteWrapper
                exact
                path='/user/signup'
                component={UserCreatePage}
                layout={AuthLayout}
            />

            <RouteWrapper
                component={NotFoundPage}
                layout={DefaultLayout}
            />
        </Switch>
    </Router>
);

export default Routes;