import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import Buttons from './components/button/button';
import Headers from './components/header/header';
import "./index.css"


ReactDOM.render(
  <React.StrictMode>
    <Headers />
    <Buttons name="Start Now"/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);