import React from 'react';
import './nowplaying-center.scss';
import { ShuffleIcon, PreviousIcon, PlayIcon, NextIcon, RepeatIcon } from '../icons';

interface Props {
  currentTime: string;
  totalTime: string;
}

const NowplayingCenter: React.FC<Props> = ({ currentTime, totalTime }) => {
  return (
    <div className="nowplaying-center-container">
      <div className="nowplaying-center-inner-container">
        <div className="nowplaying-center-controls">
          <div className="nowplaying-center-controls-shuffle">
            <ShuffleIcon className="nowplaying-center-controls-small-button" />
          </div>
          <div className="nowplaying-center-controls-previous">
            <PreviousIcon className="nowplaying-center-controls-small-button" />
          </div>
          <div className="nowplaying-center-controls-play-pause">
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
            <span className="nowplaying-center-progress-text">{currentTime}</span>
          </div>
          <div className="nowplaying-center-progressbar" />
          <div className="nowplaying-center-progress-total-container">
            <span className="nowplaying-center-progress-text">{totalTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowplayingCenter;
