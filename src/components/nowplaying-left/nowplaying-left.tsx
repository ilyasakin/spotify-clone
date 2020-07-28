import React, { useContext } from 'react';
import './nowplaying-left.scss';
import { PlaylistHeart } from '../icons';
import CurrentSong from '../../context/CurrentSong';

const NowplayingLeft: React.FC = () => {
  const { currentSong } = useContext(CurrentSong);
  return (
    <div className="nowplaying-left-container">
      {currentSong && Object.keys(currentSong).length > 1 && (
        <>
          <div className="nowplaying-left-cover-container">
            <img
              className="nowplaying-left-cover-art"
              src={`${process.env.REACT_APP_BASE_URL}/${currentSong?.cover}`}
              alt=""
            />
          </div>
          <div className="nowplaying-left-info-area">
            <div className="nowplaying-left-info-title">
              <span>{currentSong?.name}</span>
            </div>
            <div className="nowplaying-left-info-artist">{currentSong?.artist}</div>
          </div>
          <PlaylistHeart className="nowplaying-left-like-button" />
        </>
      )}
    </div>
  );
};

export default NowplayingLeft;
