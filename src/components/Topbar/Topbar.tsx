import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Topbar.module.scss';
import NavButtonAlt from '../NavButtonAlt/NavButtonAlt';
import PillMenu from '../PillMenu/PillMenu';
import User from '../../context/User';
import SearchBar from '../SearchBar/SearchBar';

const Topbar: React.FC = () => {
  const { user } = useContext(User);
  const location = useLocation();

  return (
    <div className={styles.topbar}>
      <div className={styles['nav-buttons']}>
        <NavButtonAlt direction="left" />
        <NavButtonAlt direction="right" />
      </div>
      <div className={styles['searchbar-container']}>
        {location.pathname === '/player/search' && <SearchBar />}
      </div>
      <PillMenu className={styles['user-menu']} Text={user?.name || 'Unknown User'} />
    </div>
  );
};

export default Topbar;
