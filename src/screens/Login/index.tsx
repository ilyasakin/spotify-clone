import { useState, useEffect } from 'react';
import '../../styles/App.scss';
import { useHistory } from 'react-router-dom';
import styles from '../../styles/Login.module.scss';

import Logo from '../../components/icons/Logo';
import BigButton from '../../components/BigButton/BigButton';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Login: React.FC = () => {
  document.title = 'Login - Spotify';
  const [signUp, setSignUp] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('__TOKEN');
    if (token) history.push('/player');
  }, [history]);

  return (
    <div className={styles['login-container']}>
      <div className={styles['login-inner-container']}>
        <Logo className={styles.logo} />
        {/* TODO: Make this route instead of a state */}
        {!signUp ? (
          <>
            <SignIn />
            <h4 className={styles['dont-have-acc']}>Don&apos;t have an account?</h4>
            <BigButton
              text="Sign up for Spotify"
              className={styles['signup-button']}
              variation="outline"
              onClick={() => setSignUp(!signUp)}
            />
          </>
        ) : (
          <>
            <SignUp />
            <h3 className={styles['have-an-acc']}>
              Have an account?
              <button className={styles['spot-link']} onClick={() => setSignUp(false)}>
                Sign In
              </button>
            </h3>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
