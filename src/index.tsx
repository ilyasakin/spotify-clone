import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { setConfig } from 'react-hot-loader';
// eslint-disable-next-line import/extensions
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
