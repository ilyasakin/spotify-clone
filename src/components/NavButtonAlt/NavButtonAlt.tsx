import styles from './NavButtonAlt.module.scss';
import { Back, Forward } from '../icons';

interface Props {
  direction: string;
}

const NavButtonAlt: React.FC<Props> = ({ direction }) => {
  return (
    <div className={styles['nav-button']}>
      {direction === 'left' && <Back className={styles['nav-icon']} />}
      {direction === 'right' && <Forward className={styles['nav-icon']} />}
    </div>
  );
};

export default NavButtonAlt;
