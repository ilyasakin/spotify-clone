import React from 'react';
import './nowplaying-left.scss';
import { PlaylistHeart } from '../icons';

interface Props {
  songName: string;
  artistName: string;
}

const NowplayingLeft: React.FC<Props> = ({ songName, artistName }) => {
  return (
    <div className="nowplaying-left-container">
      <div className="nowplaying-left-cover-art" />
      <div className="nowplaying-left-info">
        <span className="nowplaying-left-song-name">{songName}</span>
        <span className="nowplaying-left-artist-name">{artistName}</span>
        <PlaylistHeart className="nowplaying-left-like-button" />
      </div>
    </div>
  );
};

export default NowplayingLeft;
