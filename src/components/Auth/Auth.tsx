import { useEffect, useContext, useState } from 'react';
import Axios, { AxiosError, AxiosResponse } from 'axios';
import { useHistory } from 'react-router-dom';
import User from '../../context/User';
import Loading from '../Loading/Loading';

const Auth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { setUser } = useContext(User);
  const [pass, setPass] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('__TOKEN');
    if (token) {
      Axios.get(`${process.env.REACT_APP_BASE_URL}/api/users/me`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res: AxiosResponse) => {
          setUser?.({ ...res.data, token });
          setPass(true);
        })
        .catch((res: AxiosError) => {
          // Better way to do this?
          if (res.response?.status === 401) {
            localStorage.removeItem('__TOKEN');
            setUser?.({});
          }
          history.push('/login');
        });
    } else {
      history.push('/login');
    }
  }, [history, setUser]);

  return <>{pass ? children : <Loading />}</>;
};

export default Auth;
