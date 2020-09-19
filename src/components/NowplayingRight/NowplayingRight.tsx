import React, { useContext, useEffect, useState } from 'react';
import './NowplayingRight.scoped.scss';
import Slider from 'react-input-slider';
import { Playlist, Devices, Volume } from '../icons';
import VolumeContext from '../../context/Volume';

const NowplayingRight: React.FC = () => {
  const { volume, setVolume } = useContext(VolumeContext);
  const [onSlider, setOnSlider] = useState(false);
  const [isSliding, setSliding] = useState(false);

  useEffect(() => {
    if (volume !== undefined) localStorage.setItem('VOLUME', volume?.toString());
  }, [volume]);

  return (
    <div className="nowplaying-right-container">
      <div className="icon-container">
        <Playlist className="icon" />
      </div>
      <div className="icon-container">
        <Devices className="icon" />
      </div>
      <div className="icon-container">
        <Volume className="icon" />
      </div>
      <div
        className="slider-container"
        onMouseEnter={() => setOnSlider(true)}
        onMouseLeave={() => setOnSlider(false)}
      >
        <Slider
          axis="x"
          xmax={1}
          xstep={0.1}
          x={volume}
          onDragStart={() => setSliding(true)}
          onDragEnd={() => setSliding(false)}
          onChange={({ x }) => setVolume?.(x)}
          styles={{
            track: {
              width: 84,
              height: 4,
              backgroundColor: '#535353',
              borderRadius: 2,
            },
            thumb: {
              height: 12,
              width: 12,
              visibility: onSlider || isSliding ? 'visible' : 'hidden',
            },
            active: {
              backgroundColor: onSlider || isSliding ? '#1db954' : '#b3b3b3',
            },
          }}
        />
      </div>
    </div>
  );
};

export default NowplayingRight;
