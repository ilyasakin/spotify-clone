import { useContext } from 'react';
import styles from './NowplayingLeft.module.scss';
import CurrentSong from '../../context/CurrentSong';
import LikeButton from '../LikeButton/LikeButton';

const NowplayingLeft: React.FC = () => {
  const { currentSong } = useContext(CurrentSong);

  return (
    <div className={styles['nowplaying-left-container']}>
      {currentSong && Object.keys(currentSong).length > 1 && (
        <>
          <div className={styles['cover-container']}>
            <img
              className={styles['cover-art']}
              src={`${process.env.REACT_APP_BASE_URL}/${currentSong?.cover}`}
              alt=""
            />
          </div>
          <div className={styles.info}>
            <div className={styles.title}>
              <span>{currentSong?.name}</span>
            </div>
            <div className={styles.artist}>{currentSong?.artist}</div>
          </div>
          {/*  */}
          <LikeButton forSong={currentSong} />
        </>
      )}
    </div>
  );
};

export default NowplayingLeft;
