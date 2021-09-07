import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './routeWrapper';

import Dashboard from '../pages/Dashboard';
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
        <Route path="/sign-up" exact component={SignUp}/>
        <Route path="/forgot" exact component={Forgot} />
        <Route path="/" exact isPrivate component={Dashboard} />
        <Route path="/change-passw" exact isPrivate component={ChangePassw} />
        <Route path="/student-regist" exact isPrivate component={Settings} />
        <Route path="/classes" exact isPrivate component={Settings} />
        <Route path="/reserved-classes" exact isPrivate component={Settings} />
        <Route path="/certificate" exact isPrivate component={Settings} />
        <Route path="/to-do" exact isPrivate component={Settings} />
        <Route path="/calendar" exact isPrivate component={Settings} />
        <Route path="/library" exact isPrivate component={Settings} />
        <Route path="/payment" exact isPrivate component={Settings} />
        <Route path="/contact-us" exact isPrivate component={Settings} />
        <Route path="/settings" exact isPrivate component={Settings} />        
      </Switch>
    </BrowserRouter>
  );
}
