import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import './styles/App.scss';
import Axios from 'axios';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Player from './screens/Player';
import Login from './screens/Login';
import UserContext from './context/User';
import Overview from './screens/Overview';

function App() {
  const [user, setUser] = useState<{ email?: string; name?: string; token?: string }>({});
  const [toPlayer, setToPlayer] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('__TOKEN');
    if (token) {
      Axios.get(`${process.env.REACT_APP_BASE_URL}/api/users/me`, {
        headers: { Authorization: `Bearer ${token}` },
      }).then((res) => {
        setUser({ ...res.data, token });
        setToPlayer(true);
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            {toPlayer ? <Redirect to="/player" /> : <Login />}
          </Route>
          <Route path="/overview">
            <Overview />
          </Route>
          <Route path="/player">
            <Player />
          </Route>
        </Switch>
        {toPlayer && <Redirect to="/player" />}
      </Router>
    </UserContext.Provider>
  );
}

export default hot(App);
