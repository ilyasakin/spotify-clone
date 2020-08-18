import React from 'react';
import './TopbarOverview.scss';
import { Logo } from '../icons';

const TopbarOverview = () => {
  return (
    <div style={{ backgroundColor: '#000' }}>
      <div className="topbar-overview-container">
        <Logo className="topbar-overview-logo" />
      </div>
    </div>
  );
};

export default TopbarOverview;
