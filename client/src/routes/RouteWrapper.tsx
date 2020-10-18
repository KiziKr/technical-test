import React from 'react';
import { Route } from 'react-router-dom';

const RouteWrapper = ({
    component: Component,
    layout: Layout,
    ...rest
}: any) => {
    return (
        <Route {...rest} render={(props) =>
            <Layout {...props}>
                <Component {...props} />
            </Layout>
        } />
    );
}

export default RouteWrapper;