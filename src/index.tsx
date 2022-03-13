import React from 'react';
import ReactDOM from 'react-dom';
import Buttons from './components/button/button';
import Headers from './components/header/header';
import "./index.css"


ReactDOM.render(
  <React.StrictMode>
    <div>
      <div>
        <Headers />
      </div>
      <div>
        <img className={'next'}
          src="/img/main-page.jpg"
          alt="button-next"
        />
      </div>
      <h1>Let’s find your perfect pair!</h1>
      <p>Take the quiz to easily discover your perfect fit from thousands of styles</p>
    <Buttons name="Start Now"/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);