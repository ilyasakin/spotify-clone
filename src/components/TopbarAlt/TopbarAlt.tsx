import { useHistory } from 'react-router-dom';
import styles from './TopbarAlt.module.scss';
import { Logo } from '../icons';

const TopbarAlt: React.FC = () => {
  const history = useHistory();

  return (
    <div style={{ backgroundColor: '#000' }}>
      <div className={styles['topbar-overview-container']}>
        <Logo className={styles.logo} />
        <nav className={styles.nav} role="navigation">
          <ul className={styles['nav-list']}>
            <li>
              <button className={styles['nav-button']} onClick={() => history.push('/player')}>
                Player
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopbarAlt;
