import { useEffect, useContext, useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import User from '../../context/User';
import Loading from '../../screens/Loading/Loading';

const Auth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { setUser } = useContext(User);
  const [pass, setPass] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('__TOKEN');

      if (!token) {
        return history.push('/login');
      }

      try {
        const user = await Axios.get(`${process.env.REACT_APP_BASE_URL}/v1/users/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser?.({ ...user.data, token });
        return setPass(true);
      } catch (error) {
        if (error.response?.status !== 401) {
          return history.push('/login');
        }

        localStorage.removeItem('__TOKEN');
        setUser?.({});
        return history.push('/login');
      }
    };

    fetchUser();
  }, [history, setUser]);

  if (!pass) {
    return <Loading message="Connecting to Server" />;
  }

  return <>{children}</>;
};

export default Auth;
