import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { setConfig } from 'react-hot-loader';
import App from './App';

setConfig({
  ignoreSFC: true,
  pureRender: true,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
