import React from 'react';
import '../styles/App.scss';
import TopbarOverview from '../components/TopbarOverview/TopbarOverview';

const Overview = () => {
  return (
    <div style={{ backgroundColor: '#121212', height: '100vh' }}>
      <TopbarOverview />
    </div>
  );
};

export default Overview;
