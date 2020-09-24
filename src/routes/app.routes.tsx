import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import Repositories from "../pages/Repositories";
import Followers from "../pages/Followers";

const AppRoutes : React.FC = () => {
  return (
    <Switch>
      <Route exact path="/home" component={ Home } />
      <Route exact path="/repos" component={ Repositories } />
      <Route exact path="/seguidores" component={ Followers } />
      <Route exact path="/seguindo" component={ Followers } />
      <Redirect to="/home" />
    </Switch>
  )
}

export default AppRoutes;