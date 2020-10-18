import React from 'react';
import { Route } from 'react-router-dom';

const RouteWrapper = ({
    component: Component,
    layout: Layout,
    ...rest
}: any) => {
    return (
        <Route {...rest} render={() =>
            <Layout>
                <Component />
            </Layout>
        } />
    );
}

export default RouteWrapper;