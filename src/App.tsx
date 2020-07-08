import React from 'react';
import { hot } from 'react-hot-loader/root';
import './styles/App.scss';
import Navbar from './components/navbar/navbar';
import Nowplaying from './components/nowplaying/nowplaying';
import Topbar from './components/topbar/topbar';
import Main from './components/main/main';

function App() {
  return (
    <div>
      <Navbar />
      <Nowplaying />
      <Topbar />
      <Main />
    </div>
  );
}

export default hot(App);
