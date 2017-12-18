import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

export default(
    // Switch for routing 42G
    <Switch>
            {/* Route for router 42F */}
        <Route component={Login} path='/' exact/>
        {/* component for routing 42H */}
        <Route component={Home} path='/home' />

    </Switch>
)