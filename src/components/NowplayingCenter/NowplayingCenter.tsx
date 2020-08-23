import React, { useContext, useState, useRef, useEffect } from 'react';
import './NowplayingCenter.scss';
import ReactHowler from 'react-howler';
import Slider from 'react-input-slider';
import { ShuffleIcon, PreviousIcon, PlayIcon, NextIcon, RepeatIcon, PauseIcon } from '../icons';
import CurrentSong from '../../context/CurrentSong';
import VolumeContext from '../../context/Volume';

const formatTime = (duration: number | undefined): string => {
  if (duration) {
    const minutes: number = Math.floor(duration / 60);
    let formattedMinutes: string = minutes.toString();
    const seconds: number = Math.floor(duration - minutes * 60);
    let formattedSeconds: string = seconds.toString();
    if (/^\d$/.test(minutes.toString())) formattedMinutes = `0${minutes}`;
    if (/^\d$/.test(seconds.toString())) formattedSeconds = `0${seconds}`;
    return `${formattedMinutes}:${formattedSeconds}`;
  }
  return '00:00';
};

const NowplayingCenter: React.FC = () => {
  const { currentSong } = useContext(CurrentSong);
  const { volume } = useContext(VolumeContext);
  const [isPlaying, setPlaying] = useState(false);
  const [duration, setDuration] = useState<number | undefined>(0);
  const [curTime, setCurTime] = useState(0);
  const [isSeeking, setSeeking] = useState(false);
  const [dummyCurTime, setDummyCurTime] = useState(10);
  const player = useRef<ReactHowler | undefined>();
  const [onSlider, setOnSlider] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSong && Object.keys(currentSong).length > 1) {
        try {
          const time = player.current?.seek();
          if (typeof time === 'number') setCurTime(time);
        } catch (err) {
          setCurTime(0);
          // eslint-disable-next-line no-console
          console.log(err);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [player, currentSong]);

  useEffect(() => {
    if (isPlaying && currentSong && Object.keys(currentSong).length > 1) {
      document.title = `${currentSong.name} · ${currentSong.artist}`;
    } else {
      document.title = 'Spotify';
    }
  }, [isPlaying, currentSong]);

  const handleChange = ({ x }: { x: number }): void => {
    if (player.current && duration) {
      if (typeof x === 'number') {
        setDummyCurTime(x);
        player.current.seek((duration / 100) * x);
      }
    }
  };

  return (
    <div className="nowplaying-center-container">
      <div className="nowplaying-center-inner-container">
        <div className="nowplaying-center-controls">
          <ReactHowler
            src={`${process.env.REACT_APP_BASE_URL}/${currentSong?.location}`}
            playing={isPlaying}
            html5
            volume={volume}
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            ref={player}
            onLoad={() => {
              setDuration(player.current && player.current.duration());
              if (typeof player.current?.seek() === 'number') setCurTime(player.current?.seek());
            }}
          />
          <div className="nowplaying-center-controls-shuffle">
            <ShuffleIcon className="nowplaying-center-controls-small-button" />
          </div>
          <div className="nowplaying-center-controls-previous">
            <PreviousIcon className="nowplaying-center-controls-small-button" />
          </div>
          <div
            className="nowplaying-center-controls-play-pause"
            onClick={() => {
              setPlaying(!isPlaying);
            }}
            role="button"
            aria-hidden="true"
          >
            {!isPlaying ? (
              <PlayIcon className="nowplaying-center-controls-big-button" />
            ) : (
              <PauseIcon className="nowplaying-center-controls-big-button" />
            )}
          </div>
          <div className="nowplaying-center-controls-next">
            <NextIcon className="nowplaying-center-controls-small-button" />
          </div>
          <div className="nowplaying-center-controls-repeat">
            <RepeatIcon className="nowplaying-center-controls-small-button" />
          </div>
        </div>
        <div className="nowplaying-center-progress">
          <div className="nowplaying-center-progress-current-container">
            <span className="nowplaying-center-progress-text">{formatTime(curTime)}</span>
          </div>
          <div
            style={{ alignSelf: 'center', justifySelf: 'center', height: '4px', width: '100%' }}
            onMouseEnter={() => setOnSlider(true)}
            onMouseLeave={() => setOnSlider(false)}
          >
            <Slider
              axis="x"
              xstep={1}
              xmax={100}
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              x={!isSeeking ? (curTime * 100) / duration! : dummyCurTime}
              onChange={handleChange}
              onDragStart={() => {
                setPlaying(false);
                setSeeking(true);
              }}
              onDragEnd={() => {
                setPlaying(true);
                setSeeking(false);
              }}
              styles={{
                track: {
                  backgroundColor: '#535353',
                  right: '7.1%',
                  left: '7.1%',
                  width: 'calc(100% - 14.2%)',
                  height: '4px',
                  position: 'absolute',
                },
                thumb: {
                  height: 12,
                  width: 12,
                  visibility: onSlider ? 'visible' : 'hidden',
                },
                active: {
                  backgroundColor: onSlider ? '#1db954' : '#b3b3b3',
                },
              }}
            />
          </div>
          <div className="nowplaying-center-progress-total-container">
            <span className="nowplaying-center-progress-text">{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowplayingCenter;
