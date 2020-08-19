import React from 'react';
import '../styles/App.scss';
import '../styles/Overview.scss';
import TopbarOverview from '../components/TopbarOverview/TopbarOverview';
import HeroOverview from '../components/HeroOverview/HeroOverview';

const Overview = () => {
  return (
    <div className="overview-background" style={{ height: '100vh' }}>
      <TopbarOverview />
      <div className="overview-wrapper">
        <HeroOverview
          HeroTitle="Hello!"
          HeroBody="Want to edit your profile? Find an old playlist? Put off work for a while? You can do it all here."
        />
      </div>
    </div>
  );
};

export default Overview;
