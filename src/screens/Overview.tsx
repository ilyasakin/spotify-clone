import React, { useContext } from 'react';
import '../styles/App.scss';
import '../styles/Overview.scss';
import TopbarOverview from '../components/TopbarOverview/TopbarOverview';
import HeroOverview from '../components/HeroOverview/HeroOverview';
import OverviewMenuItem from '../components/OverviewMenuItem/OverviewMenuItem';
import OverviewPage from '../components/OverviewPage/OverviewPage';
import User from '../context/User';
import OverviewTable from '../components/OverviewTable/OverviewTable';
import OverviewTableItem from '../components/OverviewTableItem/OverviewTableItem';
import BigButton from '../components/BigButton/BigButton';

const Overview = () => {
  const { user } = useContext(User);

  return (
    <div className="overview-background" style={{ height: '100vh' }}>
      <TopbarOverview />
      <div className="overview-wrapper">
        <HeroOverview
          HeroTitle="Hello!"
          HeroBody="Want to edit your profile? Find an old playlist? Put off work for a while? You can do it all here."
        />
        <div className="overview-page-wrapper">
          <div className="overview-sidebar">
            <img
              src="https://via.placeholder.com/64"
              alt=""
              style={{
                margin: '30px auto',
                display: 'block',
                width: '64px',
                height: '64px',
                borderRadius: '50%',
              }}
            />
            <OverviewMenuItem text="Account overview" indicator />
            <OverviewMenuItem text="Edit profile" />
          </div>
          <OverviewPage>
            <h1 className="overview-page-title">Account overview</h1>
            <h3 className="overview-page-subtitle">Profile</h3>
            <OverviewTable>
              <OverviewTableItem label="Username" info={user?.name} />
              <OverviewTableItem label="Email" info={user?.email} />
            </OverviewTable>
            <BigButton text="Edit Profile" variation="pop" className="overview-bigbutton" />
          </OverviewPage>
        </div>
      </div>
    </div>
  );
};

export default Overview;
