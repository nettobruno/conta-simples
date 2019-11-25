import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';
import Stratum from './pages/Stratum';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Main" component={Main} />
        <Route path="/Stratum" component={Stratum} />
      </Switch>
    </BrowserRouter>
  );
}
