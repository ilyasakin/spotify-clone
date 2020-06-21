import React from 'react';
import { hot } from 'react-hot-loader/root';
import './styles/App.scss';
import Navbar from './components/navbar/navbar';
import Nowplaying from './components/nowplaying/nowplaying';
import Topbar from './components/topbar/topbar';

function App() {
  return (
    <div>
      <Navbar />
      <Nowplaying />
      <Topbar />
    </div>
  );
}

export default hot(App);
