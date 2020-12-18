import styles from './TopbarNavButton.module.scss';
import { Back, Forward } from '../icons';

interface Props {
  direction: string;
}

const TopbarNavBtn: React.FC<Props> = ({ direction }) => {
  return (
    <div className={styles['nav-button']}>
      {direction === 'left' && <Back className={styles['nav-icon']} />}
      {direction === 'right' && <Forward className={styles['nav-icon']} />}
    </div>
  );
};

export default TopbarNavBtn;
