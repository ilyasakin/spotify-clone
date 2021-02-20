import { useContext, useState, useRef, useEffect } from 'react';
import ReactHowler from 'react-howler';
import Slider from 'react-input-slider';
import { TrackPreviousIcon, TrackNextIcon, LoopIcon, ShuffleIcon } from '@modulz/radix-icons';
import styles from './NowplayingCenter.module.scss';
import { PlayFill, PauseFill } from '../icons';
import CurrentSong from '../../context/CurrentSong';
import VolumeContext from '../../context/Volume';
import PlayingStatus from '../../context/PlayingStatus';
import LikeButton from '../LikeButton/LikeButton';
import RecentlyPlayed from '../../context/RecentlyPlayed';

const formatTime = (duration: number | undefined): string => {
  if (!duration) {
    return '00:00';
  }

  const minutes: number = Math.floor(duration / 60);
  let formattedMinutes: string = minutes.toString();
  const seconds: number = Math.floor(duration - minutes * 60);
  let formattedSeconds: string = seconds.toString();
  if (/^\d$/.test(minutes.toString())) formattedMinutes = `0${minutes}`;
  if (/^\d$/.test(seconds.toString())) formattedSeconds = `0${seconds}`;
  return `${formattedMinutes}:${formattedSeconds}`;
};

const NowplayingCenter: React.FC = () => {
  // Needs  cleaning

  const { recentlyPlayed, setRecentlyPlayed } = useContext(RecentlyPlayed);
  const { playing, setPlaying } = useContext(PlayingStatus);
  const { currentSong } = useContext(CurrentSong);
  const { volume } = useContext(VolumeContext);

  const [duration, setDuration] = useState<number | undefined>(0);
  const [curTime, setCurTime] = useState(0);
  const [isSeeking, setSeeking] = useState(false);
  const [dummyCurTime, setDummyCurTime] = useState(0);
  const player = useRef<ReactHowler | undefined>();
  const [onSlider, setOnSlider] = useState(false);
  const [loop, setLoop] = useState(localStorage.getItem('LOOP') === 'true');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (currentSong && Object.keys(currentSong).length > 1) setLoading(true);
    const interval = setInterval(() => {
      if (currentSong && Object.keys(currentSong).length > 1) {
        try {
          const time = player.current?.seek();
          if (typeof time === 'number') setCurTime(time);
        } catch {
          setCurTime(0);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [player, currentSong]);

  useEffect(() => {
    // For changing title based on the song
    if (playing && currentSong && Object.keys(currentSong).length > 1) {
      document.title = `${currentSong.name} · ${currentSong.artist}`;
    } else {
      document.title = 'Spotify';
    }
  }, [playing, currentSong]);

  useEffect(() => {
    // Add to recently played if song is playing and it is not in recently played
    if (playing && currentSong && !recentlyPlayed?.includes(currentSong)) {
      if (recentlyPlayed) setRecentlyPlayed?.([...recentlyPlayed, currentSong]);
      // TODO: Send this data to back-end
    }
  }, [playing, currentSong, recentlyPlayed, setRecentlyPlayed]);

  useEffect(() => {
    localStorage.setItem('LOOP', loop.toString());
  }, [loop]);

  const handleChange = ({ x }: { x: number }): void => {
    if (player.current && duration) {
      if (x ?? 0) {
        setDummyCurTime(x);
        player.current.seek((duration / 100) * x);
      }
    }
  };

  return (
    <div className={styles['nowplaying-center-container']}>
      <ReactHowler
        src={`${process.env.REACT_APP_BASE_URL}/${currentSong?.location}`}
        playing={playing}
        volume={volume}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref={player}
        onLoad={() => {
          setDuration(player.current?.duration());
          setCurTime(player.current?.seek() ?? 0);
          setLoading(false);
        }}
        loop={loop}
        xhr={{
          headers: {
            Authorization: `Bearer ${localStorage.getItem('__TOKEN')}`,
          },
        }}
      />
      <div
        className={`${styles['controls-and-other']} ${
          currentSong?._id ? styles['controls-and-other-show'] : ''
        }`}
      >
        {currentSong?.cover && (
          <div className={styles['cover-container']}>
            <img
              className={styles.cover}
              src={`${process.env.REACT_APP_BASE_URL}/${currentSong?.cover}`}
              alt="cover"
            />
          </div>
        )}

        <div className={styles.controls}>
          {/* Mobile view info */}
          <div className={styles.mobile}>
            <div className={styles['current-song']}>
              <span>{currentSong?.name}</span>
              <span>·</span>
              <span className={styles.artist}>{currentSong?.artist}</span>
            </div>
            <LikeButton forSong={currentSong} />
          </div>

          {/* Shuffle */}
          <button className={styles['control-item']}>
            <ShuffleIcon className={styles['small-button']} />
          </button>

          {/* Previous */}
          <button className={styles['control-item']}>
            <TrackPreviousIcon className={styles['small-button']} />
          </button>

          {/* Play-Pause */}
          <button
            className={`${styles['control-item']} ${styles['control-play']}`}
            onClick={() => setPlaying?.(!playing)}
          >
            {/* Might change this */}
            {!playing ? (
              <PlayFill className={`${styles['big-button']} ${styles['play-pause']}`} />
            ) : (
              <PauseFill className={`${styles['big-button']} ${styles['play-pause']}`} />
            )}
            <div
              className={`${styles['big-button']} ${styles['play-pause-spinner']} ${
                isLoading ? styles.spin : ''
              }`}
            />
          </button>

          {/* Next */}
          <button className={styles['control-item']}>
            <TrackNextIcon className={styles['small-button']} />
          </button>

          {/* Loop */}
          <button
            className={`${styles['control-item']} ${loop ? styles['control-active'] : ''}`}
            onClick={() => setLoop?.(!loop)}
          >
            <LoopIcon className={styles['small-button']} />
          </button>
        </div>
      </div>

      <div className={`${styles.progress} ${currentSong?._id ? styles['progress-show'] : ''}`}>
        <div className={styles['progress-with-number']}>{formatTime(curTime)}</div>
        <div
          style={{
            alignSelf: 'center',
            justifySelf: 'center',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
          }}
          onMouseEnter={() => setOnSlider(true)}
          onMouseLeave={() => setOnSlider(false)}
        >
          <Slider
            axis="x"
            xstep={1}
            xmax={100}
            x={!isSeeking && duration ? (curTime * 100) / duration : dummyCurTime}
            onChange={handleChange}
            onDragStart={() => {
              setPlaying?.(false);
              setSeeking(true);
            }}
            onDragEnd={() => {
              setPlaying?.(true);
              setSeeking(false);
            }}
            styles={{
              track: {
                backgroundColor: '#535353',
                height: '4px',
                alignSelf: 'center',
                width: '100%',
              },

              thumb: {
                height: 12,
                width: 12,
                visibility: onSlider || isSeeking ? 'visible' : 'hidden',
              },

              active: {
                backgroundColor: onSlider || isSeeking ? '#1db954' : '#b3b3b3',
              },
            }}
          />
        </div>
        <div className={styles['progress-with-number']}>{formatTime(duration)}</div>
      </div>
    </div>
  );
};

export default NowplayingCenter;
