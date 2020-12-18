import { useContext, useState } from 'react';
import ImageFadeIn from 'react-image-fade-in';
import CurrentSong from '../../context/CurrentSong';
import PlayingStatus from '../../context/PlayingStatus';
import Song from '../../types/Song';
import { PauseFill, PlayFill } from '../icons';
import LikeButton from '../LikeButton/LikeButton';
import styles from './ListItem.module.scss';

interface Props {
  song: Song;
  index: number;
}

const ListItem: React.FC<Props> = ({ song, index }) => {
  const [onHover, setOnHover] = useState(false);
  const { currentSong, setCurrentSong } = useContext(CurrentSong);
  const { playing, setPlaying } = useContext(PlayingStatus);

  return (
    <div
      className={styles['list-item']}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <div className={styles.id}>
        {!onHover ? (
          <>
            {currentSong === song && playing ? (
              <div>
                <div className={styles.bar} />
                <div className={styles.bar} />
                <div className={styles.bar} />
                <div className={styles.bar} />
              </div>
            ) : (
              index
            )}
          </>
        ) : (
          <>
            {!playing || currentSong !== song ? (
              <PlayFill
                onClick={() => {
                  setCurrentSong?.(song);
                  setPlaying?.(true);
                }}
              />
            ) : (
              <PauseFill
                onClick={() => {
                  setPlaying?.(false);
                }}
              />
            )}
          </>
        )}
      </div>
      <ImageFadeIn
        className={styles.cover}
        src={`${process.env.REACT_APP_BASE_URL}/${song.cover}`}
      />
      <div className={styles['song-info']}>
        <div className={styles.name}>{song.name}</div>
        <div className={styles.artist}>{song.artist}</div>
      </div>
      <div className={styles.rest}>{!onHover || <LikeButton forSong={song} />}</div>
    </div>
  );
};

export default ListItem;
