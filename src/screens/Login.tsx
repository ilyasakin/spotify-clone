import React, { useState } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import '../styles/App.scss';
import '../styles/Login.scss';
import Logo from '../components/icons/Logo';

interface User {
  email: string;
  password: string;
}

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/api/users/signin`, {
        email,
        password,
      })
      .then((res: AxiosResponse) => {
        // setReturnedData(res);
      })
      .catch((res: AxiosError) => {
        setError(res?.response?.data.error);
      });
  };

  return (
    <div style={{ backgroundColor: '#121212', height: '100vh' }}>
      {/* <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input id="email" name="email" type="email" onChange={(e) => setEmail(e.target.value)} />
        <input
          id="password"
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Sign In</button>
      </form>
      <p>{error}</p> */}
      <div className="container">
        <Logo className="logo" />
        <input className="email-input" placeholder="Email" type="email" />
        <input className="passw-input" placeholder="Password" type="password" />
      </div>
    </div>
  );
};

export default Login;
