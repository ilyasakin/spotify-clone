import { useContext } from 'react';
import ImageFadeIn from 'react-image-fade-in';
import isURL from 'validator/lib/isURL';
import styles from './Card.module.scss';
import { PlayFill, PauseFill } from '../icons';
import CurrentSong from '../../context/CurrentSong';
import PlayingStatus from '../../context/PlayingStatus';
import Song from '../../types/Song';

interface Props {
  song: Song;
}

const Card: React.FC<Props> = ({ song }) => {
  const { currentSong, setCurrentSong } = useContext(CurrentSong);
  const { playing, setPlaying } = useContext(PlayingStatus);

  return (
    <div className={styles.card}>
      <div className={styles['cover-container']}>
        <ImageFadeIn
          className={styles.cover}
          src={
            song.cover && !isURL(song.cover)
              ? `${process.env.REACT_APP_BASE_URL}/${song.cover}`
              : song.cover
          }
        />
      </div>
      <div className={styles.info}>
        <div className={styles.title} title={song.name}>
          {song.name}
        </div>
        <div className={styles.description} title={song.artist}>
          {song.artist}
        </div>
      </div>
      <button
        className={`${styles.fab} ${
          currentSong?._id === song._id && playing ? styles['fab-visible'] : ''
        }`}
        tabIndex={0} // TODO
        aria-hidden="true"
        title="Play"
        onClick={() => {
          if (currentSong?._id === song._id && playing) {
            setPlaying?.(false);
          } else {
            setCurrentSong?.(song);
          }
        }}
      >
        {currentSong?._id === song._id && playing ? (
          <PauseFill className={styles['fab-icon']} />
        ) : (
          <PlayFill className={styles['fab-icon']} />
        )}
      </button>
    </div>
  );
};

export default Card;
