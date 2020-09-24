import React, {useContext, useState} from 'react';

import './scss/main.scss';

import Layout from './components/Generic/Layout'
import AuthContext from "./contexts/auth";
import AuthRoutes from "./routes/auth.routes";
import AppRoutes from "./routes/app.routes";

const App:React.FC = () => {

  let routes;
  const { loggedIn, user } = useContext(AuthContext);
  // renderizo minhas rotas de acordo com estado loggedIn do meu contexto
  // quando usuario conseguir logar, meu estado receberá true
  // e todos que componentes que utilizam eles refletiram essa alteração
  // ou seu, minha AppRoutes é renderizada
  loggedIn?
    routes = ( <AppRoutes/> ) :
    routes = ( <AuthRoutes/> )

  return <Layout loggedIn={loggedIn}>{routes}</Layout>;
}
export default App;
