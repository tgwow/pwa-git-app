import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import Login from "../pages/Login";

const AuthRoutes : React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={ Login }  />
      <Redirect to="/" />
    </Switch>
  )
}

export default AuthRoutes;