import React from 'react';
import ReactDOM from 'react-dom';
import './tema/mojakafica.scss';
import {MojaKafica} from './mojakafica';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <MojaKafica />
  </React.StrictMode>,
  document.getElementById('mojakafica')
);
serviceWorker.unregister();
