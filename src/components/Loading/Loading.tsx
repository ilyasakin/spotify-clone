import { RotateSpinner } from 'react-spinners-kit';
import styles from './Loading.module.scss';

const Loading: React.FC = () => {
  return (
    <div className={styles.container}>
      <RotateSpinner color="#1db954" />
      <h6 className={styles.text}>Connecting to server</h6>
    </div>
  );
};

export default Loading;
