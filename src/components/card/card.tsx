/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// @ts-nocheck
import React, { useContext } from 'react';
import './card.scss';
import { CardPlay } from '../icons';
import { CurrentSong } from '../../context/CurrentSong';

interface Props {
  song: Record<string, any>;
}

const Card: React.FC<Props> = ({ song }) => {
  const { setCurrentSong } = useContext(CurrentSong);
  return (
    <div className="card-container">
      <div className="card-img-container">
        <img
          style={{ width: '100%' }}
          src={`${process.env.REACT_APP_BASE_URL}/${song.cover}`}
          alt=""
        />
      </div>
      <span className="card-title">{song.name}</span>
      <span className="card-artist">{song.artist}</span>
      <div className="card-fab" onClick={() => setCurrentSong(song)}>
        <CardPlay className="card-fab-icon" />
      </div>
    </div>
  );
};

export default Card;
