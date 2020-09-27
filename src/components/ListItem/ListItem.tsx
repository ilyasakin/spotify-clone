import React, { useContext, useState } from 'react';
import ImageFadeIn from 'react-image-fade-in';
import CurrentSong from '../../context/CurrentSong';
import PlayingStatus from '../../context/PlayingStatus';
import Song from '../../types/Song';
import { CardPause, CardPlay } from '../icons';
import LikeButton from '../LikeButton/LikeButton';
import './ListItem.scoped.scss';

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
      className="list-item"
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <div className="id">
        {!onHover ? (
          <>
            {currentSong === song && playing ? (
              <div>
                <div className="bar" />
                <div className="bar" />
                <div className="bar" />
                <div className="bar" />
              </div>
            ) : (
              index
            )}
          </>
        ) : (
          <>
            {!playing || currentSong !== song ? (
              <CardPlay
                onClick={() => {
                  setCurrentSong?.(song);
                  setPlaying?.(true);
                }}
              />
            ) : (
              <CardPause
                onClick={() => {
                  setPlaying?.(false);
                }}
              />
            )}
          </>
        )}
      </div>
      <ImageFadeIn className="cover" src={`${process.env.REACT_APP_BASE_URL}/${song.cover}`} />
      <div className="song-info">
        <div className="name">{song.name}</div>
        <div className="artist">{song.artist}</div>
      </div>
      <div className="rest">
        <LikeButton forSong={song} />
      </div>
    </div>
  );
};

export default ListItem;
