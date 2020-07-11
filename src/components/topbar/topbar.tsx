import React from 'react';
import './topbar.scss';
import TopbarNavBtn from '../topbar-nav-btn/topbar-nav-btn';

const Topbar: React.FC = () => {
  return (
    <div className="topbar">
      <TopbarNavBtn direction="left" />
      <TopbarNavBtn direction="right" />
    </div>
  );
};

export default Topbar;
