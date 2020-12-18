import { useContext } from 'react';
import { format } from 'date-fns';
import { useHistory, useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import OverviewTable from '../../components/OverviewTable/OverviewTable';
import OverviewTableItem from '../../components/OverviewTableItem/OverviewTableItem';
import User from '../../context/User';
import BigButton from '../../components/BigButton/BigButton';
import styles from '../../styles/Overview.module.scss';

const Account: React.FC = () => {
  document.title = 'Account Overview - Spotify';
  const { user, setUser } = useContext(User);
  const history = useHistory();
  const match = useRouteMatch();

  const parseDate = (date: string | undefined): string => {
    if (date) {
      return format(Date.parse(date), 'MMMM dd, yyyy');
    }
    return 'Not found';
  };

  return (
    <>
      <h1 className={styles['overview-page-title']}>Account overview</h1>
      <h3 className={styles['overview-page-subtitle']}>Profile</h3>
      <OverviewTable>
        <OverviewTableItem label="Username" info={user?.name} />
        <OverviewTableItem label="Email" info={user?.email} />
        <OverviewTableItem label="Date of birth" info={parseDate(user?.birthDate)} />
        <OverviewTableItem label="Country" info={user?.country} />
      </OverviewTable>
      <BigButton
        text="Edit Profile"
        variation="pop"
        className={styles['overview-big-button']}
        onClick={() => history.push(`${match.path}/edit`)}
      />
      <h3 className={styles['overview-page-subtitle']}>Signout everywhere</h3>
      <p className={styles['overview-paragraph']}>
        Sign out wherever you have Spotify open, including the web, mobile, desktop or any other
        devices.
      </p>
      <BigButton
        text="Sign out everywhere"
        variation="pop"
        className={styles['overview-big-button']}
        onClick={() => {
          axios
            .post(`${process.env.REACT_APP_BASE_URL}/api/users/logoutall`, null, {
              headers: { Authorization: `Bearer ${localStorage.getItem('__TOKEN')}` },
            })
            .then(() => {
              localStorage.removeItem('__TOKEN');
              setUser?.({});
              history.push('/');
            });
        }}
      />
    </>
  );
};

export default Account;
