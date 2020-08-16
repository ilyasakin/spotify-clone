import React, { useState, useContext } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import '../styles/App.scss';
import '../styles/Login.scss';
import Logo from '../components/icons/Logo';
import User from '../context/User';
import BigButton from '../components/BigButton/BigButton';
import LoginDivider from '../components/LoginDivider/LoginDivider';

interface User {
  email: string;
  password: string;
}

const Login = () => {
  const [signUp, setSignUp] = useState(false);
  const [, setUsername] = useState('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [, setError] = useState('');
  const { setUser } = useContext(User);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/api/users/signin`, {
        email,
        password,
      })
      .then((res: AxiosResponse) => {
        // eslint-disable-next-line no-unused-expressions
        setUser?.(res.data);
      })
      .catch((res: AxiosError) => {
        setError(res?.response?.data.error);
      });
  };

  return (
    <div style={{ backgroundColor: '#121212', height: '100vh' }}>
      <div className="container">
        <div className="login-inner-container">
          <Logo className="logo" />
          {!signUp ? (
            <>
              <form
                onSubmit={handleSubmit}
                style={{ display: 'inherit', gap: 'inherit', flexDirection: 'inherit' }}
              >
                <input
                  className="spot-input"
                  placeholder="Email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="spot-input"
                  placeholder="Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <BigButton text="Log In" className="login-button" type="submit" />
              </form>
              <LoginDivider />
              <h4 className="dont-have-acc">Don&apos;t have an account?</h4>
              <BigButton
                text="Sign up for Spotify"
                className="signup-button"
                variation="outline"
                onClick={() => setSignUp(!signUp)}
              />
            </>
          ) : (
            <>
              <form
                onSubmit={handleSubmit}
                style={{ display: 'inherit', gap: 'inherit', flexDirection: 'inherit' }}
              >
                <input
                  className="spot-input"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  className="spot-input"
                  placeholder="Email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="spot-input"
                  placeholder="Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <BigButton text="Sign up" />
              </form>
              <h3 className="have-an-acc">
                Have an account?{' '}
                <button className="spot-link" onClick={() => setSignUp(false)}>
                  Sign In
                </button>
              </h3>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
