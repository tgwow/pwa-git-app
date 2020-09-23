import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Routes from './routes';
import Wrapper from './components/UI/Wrapper';

import { BrowserRouter, Route } from 'react-router-dom';


import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Wrapper>
        <App/>
      </Wrapper>
    </BrowserRouter >
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
