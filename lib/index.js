import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';

const userName = 'Mario';

ReactDOM.render(
  <App userName={userName} email='mario@gmail.com' />,
  document.getElementById('app')
)