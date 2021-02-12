import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import * as atatus from 'atatus-spa';

ReactDOM.render(
  <React.StrictMode>
    <h1>Meet Up</h1>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
atatus.config('89c1f6e38c9f42668281689d25fa190d').install();

