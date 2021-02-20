import { useContext } from 'react';
import { format } from 'date-fns';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Table from '../../components/Table/Table';
import TableItem from '../../components/TableItem/TableItem';
import User from '../../context/User';
import BigButton from '../../components/BigButton/BigButton';
import styles from '../../styles/Overview.module.scss';

const Account: React.FC = () => {
  document.title = 'Account Overview - Spotify';
  const { user, setUser } = useContext(User);
  const history = useHistory();

  const parseDate = (date: string | undefined): string => {
    if (!date) return 'Not found';
    return format(Date.parse(date), 'MMMM dd, yyyy');
  };

  const handleSignoutEverywhere = async () => {
    await axios.post(`${process.env.REACT_APP_BASE_URL}/v1/users/logout-all`, null, {
      headers: { Authorization: `Bearer ${localStorage.getItem('__TOKEN')}` },
    });

    localStorage.removeItem('__TOKEN');
    setUser?.({});
    history.push('/');
  };

  return (
    <>
      <h1 className={styles['overview-page-title']}>Account overview</h1>
      <h3 className={styles['overview-page-subtitle']}>Profile</h3>
      <Table>
        <TableItem label="Username" info={user?.name} />
        <TableItem label="Email" info={user?.email} />
        <TableItem label="Date of birth" info={parseDate(user?.birthDate)} />
        <TableItem label="Country" info={user?.country} />
      </Table>
      <BigButton
        text="Edit Profile"
        variation="pop"
        className={styles['overview-big-button']}
        onClick={() => history.push(`/overview/edit`)}
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
        onClick={() => handleSignoutEverywhere()}
      />
    </>
  );
};

export default Account;
