import React from 'react';
import './Topbar.scss';
import TopbarNavBtn from '../TopbarNavButton/TopbarNavButton';

const Topbar: React.FC = () => {
  return (
    <div className="topbar">
      <TopbarNavBtn direction="left" />
      <TopbarNavBtn direction="right" />
    </div>
  );
};

export default Topbar;
