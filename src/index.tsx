import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { setConfig } from 'react-hot-loader';
import App from './App';

setConfig({
  ignoreSFC: true,
  pureRender: true,
});

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
