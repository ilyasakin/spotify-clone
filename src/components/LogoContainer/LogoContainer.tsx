import React from 'react';
import './LogoContainer.scss';
import Logo from '../icons/Logo';

const LogoContainer: React.FC = () => {
  return (
    <div className="logo-container">
      <Logo className="logo-img" />
    </div>
  );
};

export default LogoContainer;
