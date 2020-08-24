import React, { useState, useContext, useEffect } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import '../styles/App.scss';
import '../styles/Login.scss';
import { useHistory } from 'react-router-dom';
import CountryList from 'country-list';
import DatePicker from 'react-date-picker';
import Logo from '../components/icons/Logo';
import User from '../context/User';
import BigButton from '../components/BigButton/BigButton';
import LoginDivider from '../components/LoginDivider/LoginDivider';

interface User {
  email: string;
  password: string;
}

const Login = () => {
  document.title = 'Login - Spotify';
  const [signUp, setSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [, setError] = useState('');
  const { setUser } = useContext(User);
  const history = useHistory();
  const [selectedCountry, setCountry] = useState('');
  const [birthDate, setBirthDate] = useState<Date | Date[]>(new Date());

  useEffect(() => {
    const token = localStorage.getItem('__TOKEN');
    if (token) history.push('/player');
  }, [history]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    switch (signUp) {
      case false:
        axios
          .post(`${process.env.REACT_APP_BASE_URL}/api/users/signin`, {
            email,
            password,
          })
          .then((res: AxiosResponse) => {
            localStorage.setItem('__TOKEN', res.data.token);
            // eslint-disable-next-line no-unused-expressions
            setUser?.(res.data);
            history.push('/player');
          })
          .catch((res: AxiosError) => {
            setError(res?.response?.data.error);
          });
        break;
      case true:
        axios
          .post(`${process.env.REACT_APP_BASE_URL}/api/users/signup`, {
            name: username,
            email,
            password,
            birthDate,
            country: selectedCountry,
          })
          .then((res: AxiosResponse) => {
            // eslint-disable-next-line no-unused-expressions
            setUser?.(res.data);
            history.push('/player');
          })
          .catch((res: AxiosError) => {
            setError(res?.response?.data.error);
          });
        break;
      default:
        break;
    }
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
                <h5 className="subtitle">Date of birth</h5>
                <DatePicker
                  value={birthDate}
                  onChange={(e: Date | Date[]) => setBirthDate(e)}
                  className="datepicker"
                />
                <h5 className="subtitle">Country</h5>
                <select
                  id="countries"
                  className="spot-input"
                  style={{ paddingTop: '5px', paddingBottom: '5px' }}
                  onChange={(e) => setCountry(e.currentTarget.value)}
                >
                  {CountryList.getNames().map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                <BigButton text="Sign up" />
              </form>
              <h3 className="have-an-acc">
                Have an account?
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
