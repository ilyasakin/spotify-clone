import React, { useContext } from 'react';
import '../styles/App.scss';
import '../styles/Overview.scss';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import moment from 'moment';
import TopbarOverview from '../components/TopbarOverview/TopbarOverview';
import HeroOverview from '../components/HeroOverview/HeroOverview';
import OverviewMenuItem from '../components/OverviewMenuItem/OverviewMenuItem';
import OverviewPage from '../components/OverviewPage/OverviewPage';
import User from '../context/User';
import OverviewTable from '../components/OverviewTable/OverviewTable';
import OverviewTableItem from '../components/OverviewTableItem/OverviewTableItem';
import BigButton from '../components/BigButton/BigButton';

const Overview = () => {
  document.title = 'Account Overview - Spotify';
  const { user, setUser } = useContext(User);
  const history = useHistory();

  const parseDate = (date: string | undefined): string => {
    if (date) {
      const d = moment(Date.parse(date));
      return d.format('MMMM DD, YYYY');
    }
    return 'Not found';
  };

  return (
    <div className="overview-background" style={{ height: '100%' }}>
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
              <OverviewTableItem label="Date of birth" info={parseDate(user?.birthDate)} />
              <OverviewTableItem label="Country" info={user?.country} />
            </OverviewTable>
            <BigButton text="Edit Profile" variation="pop" className="overview-big-button" />
            <h3 className="overview-page-subtitle">Signout everywhere</h3>
            <p className="overview-paragraph">
              Sign out wherever you have Spotify open, including the web, mobile, desktop or any
              other devices.
            </p>
            <BigButton
              text="Sign out everywhere"
              variation="pop"
              className="overview-big-button"
              onClick={() => {
                Axios.post(`${process.env.REACT_APP_BASE_URL}/api/users/logoutall`, null, {
                  headers: { Authorization: `Bearer ${localStorage.getItem('__TOKEN')}` },
                }).then(() => {
                  localStorage.removeItem('__TOKEN');
                  setUser?.({});
                  history.push('/');
                });
              }}
            />
          </OverviewPage>
        </div>
      </div>
    </div>
  );
};

export default Overview;
