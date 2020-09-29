import React, { useState, useContext } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { useHistory } from 'react-router-dom';
import User from '../../context/User';
import LoginDivider from '../../components/LoginDivider/LoginDivider';
import BigButton from '../../components/BigButton/BigButton';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const { setUser } = useContext(User);
  const history = useHistory();
  const [, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/api/users/signin`, {
        email,
        password,
      })
      .then((res: AxiosResponse) => {
        localStorage.setItem('__TOKEN', res.data.token);
        setLoading(false);
        setUser?.(res.data);
        history.push('/player');
      })
      .catch((res: AxiosError) => {
        setLoading(false);
        setError(res?.response?.data.error);
      });
  };
  return (
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
        <BigButton text="Log In" className="login-button" type="submit" loading={isLoading} />
      </form>
      <LoginDivider />
    </>
  );
};

export default SignIn;
