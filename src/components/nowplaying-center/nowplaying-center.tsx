/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// @ts-nocheck
import React, { useContext, useState, useRef, useEffect } from 'react';
import './nowplaying-center.scss';
import ReactHowler from 'react-howler';
import { ShuffleIcon, PreviousIcon, PlayIcon, NextIcon, RepeatIcon } from '../icons';
import { CurrentSong } from '../../context/CurrentSong';

interface Props {
  currentTime: string;
  totalTime: string;
}

const NowplayingCenter: React.FC<Props> = ({ currentTime, totalTime }) => {
  const { currentSong } = useContext(CurrentSong);
  const [isPlaying, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [curTime, setCurTime] = useState(0);
  const player = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      try {
        if (typeof player.current.seek() === 'number') setCurTime(player.current.seek());
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
            ref={player}
            onLoad={() => {
              setDuration(player.current.duration());
              if (typeof player.current.seek() === 'number') setCurTime(player.current.seek());
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
          >
            <PlayIcon className="nowplaying-center-controls-big-button" />
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
            <span className="nowplaying-center-progress-text">{curTime}</span>
          </div>
          <div className="nowplaying-center-progressbar" />
          <div className="nowplaying-center-progress-total-container">
            <span className="nowplaying-center-progress-text">{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowplayingCenter;
