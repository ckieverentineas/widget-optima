import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import Buttons from './components/button/button';


ReactDOM.render(
  <React.StrictMode>
    <Buttons name="Start Now"/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);