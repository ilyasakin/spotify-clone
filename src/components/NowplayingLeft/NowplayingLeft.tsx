import React, { useContext, useState, useEffect } from 'react';
import './NowplayingLeft.scoped.scss';
import Axios from 'axios';
import { PlaylistHeart, PlaylistHeartOutline } from '../icons';
import CurrentSong from '../../context/CurrentSong';
import User from '../../context/User';

const NowplayingLeft: React.FC = () => {
  const { user } = useContext(User);
  const { currentSong } = useContext(CurrentSong);
  const [isLiked, setLiked] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('__TOKEN');
    Axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/users/isSongLiked`,
      { id: currentSong?.id },
      {
        headers: { Authorization: `Bearer ${token}` },
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
          {isLiked ? (
            <PlaylistHeart
              className="like-button"
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
              className="like-button"
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
