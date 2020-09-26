import React, { useContext } from 'react';
import './NowplayingLeft.scoped.scss';
import CurrentSong from '../../context/CurrentSong';
import LikeButton from '../LikeButton/LikeButton';

const NowplayingLeft: React.FC = () => {
  const { currentSong } = useContext(CurrentSong);

  return (
    <div className="nowplaying-left-container">
      {currentSong && Object.keys(currentSong).length > 1 && (
        <>
          <div className="cover-container">
            <img
              className="cover-art"
              src={`${process.env.REACT_APP_BASE_URL}/${currentSong?.cover}`}
              alt=""
            />
          </div>
          <div className="info">
            <div className="title">
              <span>{currentSong?.name}</span>
            </div>
            <div className="artist">{currentSong?.artist}</div>
          </div>
          {/*  */}
          <LikeButton />
        </>
      )}
    </div>
  );
};

export default NowplayingLeft;
