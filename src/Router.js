import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import FourZeroFour from './FourZeroFour';

const PrivateRoute = (props) => {
    const token = localStorage.getItem('token');
    if (token) {
        return <Route exact={true} path={props.path} component={props.component} />
    } else {
        return <Login {...props} />
    }
}

const Router = (props) => {
    return <Switch>
        <Route path="/" component={Login} exact={true} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        
        <PrivateRoute path="/dashboard" component={Dashboard} />
        {/* <PrivateRoute path="/profile" component={Profile} /> */}

        <Route component={FourZeroFour} />
    </Switch>
}

export default Router;