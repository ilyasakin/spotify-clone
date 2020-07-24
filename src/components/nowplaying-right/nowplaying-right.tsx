import React from 'react';
import './nowplaying-right.scss';
import { Playlist, Devices, Volume } from '../icons';

const NowplayingRight: React.FC = () => {
  return (
    <div className="nowplaying-right-container">
      <div className="nowplaying-right-playlist">
        <Playlist className="nowplaying-right-icon" />
      </div>
      <div className="nowplaying-right-devices">
        <Devices className="nowplaying-right-icon-devices" />
      </div>
      <div className="nowplaying-right-volume">
        <Volume className="nowplaying-right-icon" />
      </div>
      <div className="nowplaying-right-volume-bar" />
    </div>
  );
};

export default NowplayingRight;
