import React, { useContext } from 'react';
import './NowplayingRight.scss';
import Slider from 'react-input-slider';
import { Playlist, Devices, Volume } from '../icons';
import VolumeContext from '../../context/Volume';

const NowplayingRight: React.FC = () => {
  const { volume, setVolume } = useContext(VolumeContext);
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
      <Slider
        axis="x"
        xmax={1}
        xstep={0.1}
        x={volume}
        onChange={({ x }) => setVolume?.(x)}
        styles={{
          track: {
            position: 'absolute',
            top: 'calc(50% - 4px / 2)',
            right: 0.4,
            width: 84,
            height: 4,
            backgroundColor: '#535353',
            borderRadius: 2,
          },
          thumb: {
            height: 12,
            width: 12,
          },
          active: {
            backgroundColor: '#B3B3B3',
          },
        }}
      />
    </div>
  );
};

export default NowplayingRight;
