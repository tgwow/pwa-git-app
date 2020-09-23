import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import './scss/main.scss';

import Home from './pages/Home';
import Login from './pages/Login';
import Repositories from './pages/Repositories';
import Followers from './pages/Followers';

import Layout from './components/Generic/Layout'

const App:React.FC = () => {
  
  let routes;
  const [LoggedIn, SetLoggedIn] = useState(true);
    
  if (!LoggedIn) {
    routes = (
      <Switch>
        <Route exact path="/" component={ Login }  />
        <Redirect to="/" />
      </Switch>
    )
  } else {
    routes = (
      <Switch>
        <Route exact path="/home" component={ Home } />
        <Route exact path="/repos" component={ Repositories } />
        <Route exact path="/seguidores" component={ Followers } />
        <Route exact path="/seguindo" component={ Followers } />
        <Redirect to="/home" />
      </Switch>
    )
  }
  return <Layout loggedIn={LoggedIn}>{routes}</Layout>;
}

export default App;
