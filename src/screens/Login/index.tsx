import { useState, useEffect } from 'react';
import '../../styles/App.scss';
import '../../styles/Login.scss';
import { useHistory } from 'react-router-dom';

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
    <div className="login-container">
      <div className="login-inner-container">
        <Logo className="logo" />
        {/* TODO: Make this route instead of a state */}
        {!signUp ? (
          <>
            <SignIn />
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
            <SignUp />
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
  );
};

export default Login;
