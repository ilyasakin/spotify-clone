import React, { useContext, useState, useEffect } from 'react';
import './NowplayingLeft.scss';
import Axios from 'axios';
import { PlaylistHeart, PlaylistHeartOutline } from '../icons';
import CurrentSong from '../../context/CurrentSong';
import User from '../../context/User';

const NowplayingLeft: React.FC = () => {
  const { user } = useContext(User);
  const { currentSong } = useContext(CurrentSong);
  const [isLiked, setLiked] = useState(false);

  useEffect(() => {
    Axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/users/isSongLiked`,
      { id: currentSong?.id },
      {
        headers: { Authorization: `Bearer ${user?.token}` },
      },
    )
      .then((res) => setLiked(res.data))
      // eslint-disable-next-line no-console
      .catch((res) => console.log(res?.response?.data.error));
  }, [currentSong]);

  return (
    <div className="nowplaying-left-container">
      {currentSong && Object.keys(currentSong).length > 1 && (
        <>
          <div className="nowplaying-left-cover-container">
            <img
              className="nowplaying-left-cover-art"
              src={`${process.env.REACT_APP_BASE_URL}/${currentSong?.cover}`}
              alt=""
            />
          </div>
          <div className="nowplaying-left-info-area">
            <div className="nowplaying-left-info-title">
              <span>{currentSong?.name}</span>
            </div>
            <div className="nowplaying-left-info-artist">{currentSong?.artist}</div>
          </div>
          {isLiked ? (
            <PlaylistHeart
              className="nowplaying-left-like-button"
              onClick={() => {
                Axios.post(
                  `${process.env.REACT_APP_BASE_URL}/api/users/unlikeSong`,
                  { id: currentSong?.id },
                  {
                    headers: { Authorization: `Bearer ${user?.token}` },
                  },
                ).then(() => setLiked(false));
              }}
            />
          ) : (
            <PlaylistHeartOutline
              className="nowplaying-left-like-button"
              onClick={() => {
                Axios.post(
                  `${process.env.REACT_APP_BASE_URL}/api/users/likeSong`,
                  { id: currentSong?.id },
                  {
                    headers: { Authorization: `Bearer ${user?.token}` },
                  },
                ).then(() => setLiked(true));
              }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default NowplayingLeft;
