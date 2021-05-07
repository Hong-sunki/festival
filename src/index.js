import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Festival from './data/festival'


const festival = new Festival()
ReactDOM.render(
  <React.StrictMode>
    <App festival={festival} />
  </React.StrictMode>,
  document.getElementById('root')
);

