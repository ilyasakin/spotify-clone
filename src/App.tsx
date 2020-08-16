import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import './styles/App.scss';
import Axios from 'axios';
import Player from './screens/Player';
import Login from './screens/Login';
import UserContext from './context/User';

function App() {
  const [user, setUser] = useState<{ email?: string; name?: string; token?: string }>({});

  useEffect(() => {
    const token = localStorage.getItem('__TOKEN');
    if (token) {
      Axios.get(`${process.env.REACT_APP_BASE_URL}/api/users/me`, {
        headers: { Authorization: `Bearer ${token}` },
      }).then((res) => {
        setUser({ ...res.data, token });
      });
    }
  });

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        {user?.token ? <Player /> : <Login />}
      </UserContext.Provider>
    </div>
  );
}

export default hot(App);
