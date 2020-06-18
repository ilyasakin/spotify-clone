import React from 'react';
import { hot } from 'react-hot-loader/root';
import './styles/App.scss';
import Navbar from './components/navbar/navbar';
import Nowplaying from './components/nowplaying/nowplaying';

function App() {
  return (
    <div>
      <Navbar />
      <Nowplaying />
    </div>
  );
}

export default hot(App);
