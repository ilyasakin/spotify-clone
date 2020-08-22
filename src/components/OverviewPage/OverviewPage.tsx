import React from 'react';
import './OverviewPage.scss';

const OverviewPage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="overview-page-container">{children}</div>;
};

export default OverviewPage;
