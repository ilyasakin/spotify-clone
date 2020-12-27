import { RotateSpinner } from 'react-spinners-kit';
import styles from './Loading.module.scss';

interface Props {
  message: string;
}

const Loading: React.FC<Props> = ({ message }) => {
  return (
    <div className={styles.container}>
      <RotateSpinner color="#1db954" />
      <h6 className={styles.text}>{message}</h6>
    </div>
  );
};

export default Loading;
