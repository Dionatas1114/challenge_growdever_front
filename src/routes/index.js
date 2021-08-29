import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './routeWrapper';

import Dash from '../pages/Dashboard';
import SignIn from '../pages/Login/sign-in';
import SignUp from '../pages/Login/sign-up';
import ChangePassw from '../pages/Login/change-passw';
import Forgot from '../pages/Login/forgot';
import Settings from '../pages/Settings';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/forgot" exact component={Forgot} />
        <Route path="/" exact isPrivate component={Dash} />
        <Route path="/change-passw" exact isPrivate component={ChangePassw} />
        <Route path="/settings" exact isPrivate component={Settings} />
      </Switch>
    </BrowserRouter>
  );
}
