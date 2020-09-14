import React, { useContext } from 'react';
import './Card.scss';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import ImageFadeIn from 'react-image-fade-in';
import { CardPlay, CardPause } from '../icons';
import CurrentSong from '../../context/CurrentSong';
import PlayingStatus from '../../context/PlayingStatus';

interface Props {
  song: { _id: string; name: string; artist: string; cover: string };
}

const Card: React.FC<Props> = ({ song }) => {
  const { currentSong, setCurrentSong } = useContext(CurrentSong);
  const { playing, setPlaying } = useContext(PlayingStatus);

  return (
    <div className="card-content">
      <div className="card-cover-container">
        <ImageFadeIn
          className="card-cover"
          src={`${process.env.REACT_APP_BASE_URL}/${song.cover}`}
        />
      </div>
      <div className="card-info-area">
        <div className="card-title-area">
          <span className="card-title" title={song.name}>
            {song.name}
          </span>
        </div>
        <div className="card-description-area" title={song.artist}>
          {song.artist}
        </div>
      </div>
      <button
        // eslint-disable-next-line no-underscore-dangle
        className={`card-fab ${currentSong?._id === song._id && playing ? 'card-fab-visible' : ''}`}
        tabIndex={0} // TODO
        aria-hidden="true"
        title="Play"
        onClick={() => {
          // eslint-disable-next-line no-underscore-dangle
          if (currentSong?._id === song._id && playing) {
            setPlaying?.(false);
          } else {
            setCurrentSong?.(song);
          }
        }}
      >
        {/* eslint-disable-next-line no-underscore-dangle */}
        {currentSong?._id === song._id && playing ? (
          <CardPause className="card-fab-icon" />
        ) : (
          <CardPlay className="card-fab-icon" />
        )}
      </button>
    </div>
  );
};

export default Card;
