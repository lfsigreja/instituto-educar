import React from 'react';
import ReactDOM from 'react-dom';
import ResetCSS from './styles/resetCSS';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ResetCSS />
  </React.StrictMode>,
  document.getElementById('root')
);
