import { useContext, useEffect, useState } from 'react';
import Slider from 'react-input-slider';
import {
  SpeakerLoudIcon,
  SpeakerModerateIcon,
  SpeakerQuietIcon,
  SpeakerOffIcon,
} from '@modulz/radix-icons';
import styles from './NowplayingRight.module.scss';
import { Playlist, Devices } from '../icons';
import VolumeContext from '../../context/Volume';

const NowplayingRight: React.FC = () => {
  const { volume, setVolume } = useContext(VolumeContext);
  const [onSlider, setOnSlider] = useState(false);
  const [isSliding, setSliding] = useState(false);

  useEffect(() => {
    if (volume !== undefined) localStorage.setItem('VOLUME', volume?.toString());
  }, [volume]);

  const Volume: React.FC<{ className: string }> = ({ className }) => {
    if (volume !== undefined) {
      if (volume === 0) return <SpeakerOffIcon className={className} />;
      if (volume <= 0.5) return <SpeakerQuietIcon className={className} />;
      if (volume <= 0.8) return <SpeakerModerateIcon className={className} />;
      if (volume > 0.8) return <SpeakerLoudIcon className={className} />;
    }
    return null;
  };

  return (
    <div className={styles['nowplaying-right-container']}>
      <div className={styles['icon-container']}>
        <Playlist className={styles.icon} />
      </div>
      <div className={styles['icon-container']}>
        <Devices className={styles.icon} />
      </div>
      <div className={styles['icon-container']}>
        <Volume className={styles.icon} />
      </div>
      <div
        className={styles['slider-container']}
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
