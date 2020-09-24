import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Wrapper from './components/UI/Wrapper';
import {AuthProvider} from './contexts/auth'
import { BrowserRouter } from 'react-router-dom';


// type PropsWithChildren<P> = P | null;
//
// interface Person {
//     children: PropsWithChildren<any>
// }

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Wrapper>
        <AuthProvider>
          <App/>
        </AuthProvider>
      </Wrapper>
    </BrowserRouter >
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
