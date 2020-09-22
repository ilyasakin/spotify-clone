import React, { useContext, useState, useRef, useEffect } from 'react';
import './NowplayingCenter.scoped.scss';
import ReactHowler from 'react-howler';
import Slider from 'react-input-slider';
import { ShuffleIcon, PreviousIcon, PlayIcon, NextIcon, RepeatIcon, PauseIcon, PlaylistHeartOutline } from '../icons';
import CurrentSong from '../../context/CurrentSong';
import VolumeContext from '../../context/Volume';
import PlayingStatus from '../../context/PlayingStatus';

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
  const { playing, setPlaying } = useContext(PlayingStatus);
  const [duration, setDuration] = useState<number | undefined>(0);
  const [curTime, setCurTime] = useState(0);
  const [isSeeking, setSeeking] = useState(false);
  const [dummyCurTime, setDummyCurTime] = useState(10);
  const player = useRef<ReactHowler | undefined>();
  const [onSlider, setOnSlider] = useState(false);
  const [loop, setLoop] = useState(localStorage.getItem('LOOP') === 'true');

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
    if (playing && currentSong && Object.keys(currentSong).length > 1) {
      document.title = `${currentSong.name} · ${currentSong.artist}`;
    } else {
      document.title = 'Spotify';
    }
  }, [playing, currentSong]);

  useEffect(() => {
    localStorage.setItem('LOOP', loop.toString());
  }, [loop]);

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
      {/* TODO: Switch to pure howlerjs */}
      <ReactHowler
        src={`${process.env.REACT_APP_BASE_URL}/${currentSong?.location}`}
        playing={playing}
        volume={volume}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        ref={player}
        onLoad={() => {
          setDuration(player.current && player.current.duration());
          if (typeof player.current?.seek() === 'number') setCurTime(player.current?.seek());
        }}
        loop={loop}
        xhr={{
          headers: {
            Authorization: `Bearer ${localStorage.getItem('__TOKEN')}`,
          },
        }}
      />
      <div className="controls-and-other">
        {currentSong?.cover && (
          <div className="cover-container">
            <img
              className="cover"
              src={`${process.env.REACT_APP_BASE_URL}/${currentSong?.cover}`}
              alt="cover"
            />
          </div>
        )}

        <div className="controls">
          {/* Mobile view info */}
          <div className="mobile">
            <div className="current-song">
              <span>{currentSong?.name}</span>
              <span>·</span>
              <span className="artist">{currentSong?.artist}</span>
            </div>
            <PlaylistHeartOutline className="like-button" />
          </div>
          <button className="control-item">
            <ShuffleIcon className="small-button" />
          </button>
          <button className="control-item">
            <PreviousIcon className="small-button" />
          </button>
          <button
            className="control-item control-play"
            onClick={() => {
              setPlaying?.(!playing);
            }}
            aria-hidden="true"
          >
            {!playing ? <PlayIcon className="big-button" /> : <PauseIcon className="big-button" />}
          </button>
          <button className="control-item">
            <NextIcon className="small-button" />
          </button>
          <button
            className={`control-item ${loop ? 'control-active' : ''}`}
            onClick={() => {
              setLoop?.(!loop);
            }}
          >
            <RepeatIcon className="small-button" />
          </button>
        </div>
      </div>

      <div className="progress">
        <div className="progress-with-number">{formatTime(curTime)}</div>
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
        <div className="progress-with-number">{formatTime(duration)}</div>
      </div>
    </div>
  );
};

export default NowplayingCenter;
