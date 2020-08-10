import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import './styles/App.scss';
import Player from './screens/Player';
import Login from './screens/Login';

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loggedIn, setLoggedIn] = useState(true);
  return <div> {loggedIn ? <Player /> : <Login />} </div>;
}

export default hot(App);
