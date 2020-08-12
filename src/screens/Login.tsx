import React, { useState, useContext } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import '../styles/App.scss';
import '../styles/Login.scss';
import Logo from '../components/icons/Logo';
import User from '../context/User';
import BigButton from '../components/bigbutton/bigbutton';
import LoginDivider from '../components/login-divider/login-divider';

interface User {
  email: string;
  password: string;
}

const Login = () => {
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
        <Logo className="logo" />
        <form onSubmit={handleSubmit}>
          <input
            className="email-input"
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="passw-input"
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <BigButton text="Log In" />
        </form>
        <LoginDivider />
      </div>
    </div>
  );
};

export default Login;
