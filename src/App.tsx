import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import './styles/App.scss';
import Player from './screens/Player';
import Login from './screens/Login';
import UserContext from './context/User';

function App() {
  const [user, setUser] = useState<{ email?: string; name?: string; token?: string }>({});
  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        {user?.token ? <Player /> : <Login />}
      </UserContext.Provider>
    </div>
  );
}

export default hot(App);
