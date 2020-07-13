import React, { useContext, useState, useRef, useEffect } from 'react';
import './nowplaying-center.scss';
import ReactHowler from 'react-howler';
import { ShuffleIcon, PreviousIcon, PlayIcon, NextIcon, RepeatIcon, PauseIcon } from '../icons';
import { CurrentSong } from '../../context/CurrentSong';

const formatTime = (duration: number): string => {
  const minutes: number = Math.floor(duration / 60);
  let formattedMinutes: string = minutes.toString();
  const seconds: number = Math.floor(duration - minutes * 60);
  let formattedSeconds: string = seconds.toString();
  if (/^\d$/.test(minutes.toString())) formattedMinutes = `0${minutes}`;
  if (/^\d$/.test(seconds.toString())) formattedSeconds = `0${seconds}`;
  return `${formattedMinutes}:${formattedSeconds}`;
};

const NowplayingCenter: React.FC = () => {
  const { currentSong } = useContext(CurrentSong);
  const [isPlaying, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [curTime, setCurTime] = useState(0);
  const player = useRef<ReactHowler>();

  useEffect(() => {
    const interval = setInterval(() => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        if (typeof player.current?.seek() === 'number') setCurTime(player.current?.seek());
      } catch {
        setCurTime(0);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
              // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
              // @ts-ignore
              setDuration(player.current?.duration());
              // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
              // @ts-ignore
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
          <div className="nowplaying-center-progressbar" />
          <div className="nowplaying-center-progress-total-container">
            <span className="nowplaying-center-progress-text">{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowplayingCenter;
