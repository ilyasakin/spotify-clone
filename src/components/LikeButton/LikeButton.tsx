import React, { useContext, useEffect, useState } from 'react';
import Axios from 'axios';
import { PlaylistHeart, PlaylistHeartOutline } from '../icons';
import User from '../../context/User';
import './LikeButton.scoped.scss';
import Song from '../../types/Song';

interface Props {
  forSong?: Song;
}

const LikeButton: React.FC<Props> = ({ forSong }) => {
  const { user } = useContext(User);
  const [isLiked, setLiked] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('__TOKEN');
    Axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/users/isSongLiked`,
      { id: forSong?.id },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    )
      .then((res) => setLiked(res.data))
      // eslint-disable-next-line no-console
      .catch((res) => console.log(res?.response?.data.error));
  }, [forSong]);

  return (
    <>
      {isLiked ? (
        <PlaylistHeart
          className="like-button"
          onClick={() => {
            Axios.post(
              `${process.env.REACT_APP_BASE_URL}/api/users/unlikeSong`,
              { id: forSong?.id },
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
              { id: forSong?.id },
              {
                headers: { Authorization: `Bearer ${user?.token}` },
              },
            ).then(() => setLiked(true));
          }}
        />
      )}
    </>
  );
};

export default LikeButton;
