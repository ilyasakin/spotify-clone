import React, { useContext, useState, useRef, useEffect, ChangeEvent } from 'react';
import './nowplaying-center.scss';
import ReactHowler from 'react-howler';
import Slider from '@material-ui/core/Slider';
import { ShuffleIcon, PreviousIcon, PlayIcon, NextIcon, RepeatIcon, PauseIcon } from '../icons';
import { CurrentSong } from '../../context/CurrentSong';

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
  const [isPlaying, setPlaying] = useState(false);
  const [duration, setDuration] = useState<number | undefined>(0);
  const [curTime, setCurTime] = useState(0);
  const player = useRef<ReactHowler | undefined>();

  useEffect(() => {
    const interval = setInterval(() => {
      try {
        if (typeof player.current?.seek() === 'number') setCurTime(player.current?.seek());
      } catch {
        setCurTime(0);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // TODO: slide seeking
  const handleChange = (event: ChangeEvent<{}>, newValue: number | number[]): void => {
    if (player.current && duration) {
      if (typeof newValue === 'number') player.current.seek((duration / 100) * newValue);
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
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            ref={player}
            onLoad={() => {
              setDuration(player.current?.duration());
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
              if (!isPlaying) setPlaying(true);
              if (isPlaying) setPlaying(false);
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
          {/* TODO: Fix this properly */}
          {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
          <Slider
            value={(curTime * 100) / duration!}
            onChange={handleChange}
            onMouseDown={() => setPlaying(false)}
            onChangeCommitted={() => setPlaying(true)}
          />
          <div className="nowplaying-center-progress-total-container">
            <span className="nowplaying-center-progress-text">{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowplayingCenter;
