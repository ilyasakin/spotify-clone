// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useContext } from 'react';
import './nowplaying-left.scss';
import { PlaylistHeart } from '../icons';
import { CurrentSong } from '../../context/CurrentSong';

const NowplayingLeft: React.FC = () => {
  const { currentSong } = useContext(CurrentSong);
  return (
    <div className="nowplaying-left-container">
      <div className="nowplaying-left-cover-art">
        <img
          style={{ width: '100%' }}
          src={`${process.env.REACT_APP_BASE_URL}/${currentSong!.imgsrc}`}
          alt=""
        />
      </div>
      <div className="nowplaying-left-info">
        <span className="nowplaying-left-song-name">{currentSong!.title}</span>
        <span className="nowplaying-left-artist-name">{currentSong!.artist}</span>
        <PlaylistHeart className="nowplaying-left-like-button" />
      </div>
    </div>
  );
};

export default NowplayingLeft;
