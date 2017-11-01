import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import '../stylesheets/main.scss'

const userName = 'Mario';

ReactDOM.render(
  <App userName={userName} email='mario@gmail.com' />,
  document.getElementById('app')
)