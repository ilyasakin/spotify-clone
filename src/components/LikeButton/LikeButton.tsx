import { useContext, useEffect, useState } from 'react';
import Axios from 'axios';
import { PlaylistHeart, PlaylistHeartOutline } from '../icons';
import User from '../../context/User';
import styles from './LikeButton.module.scss';
import Song from '../../types/Song';

interface Props {
  forSong?: Song;
}

const LikeButton: React.FC<Props> = ({ forSong }) => {
  const { user } = useContext(User);
  const [isLiked, setLiked] = useState(false);

  useEffect(() => {
    const fetchIsLiked = async () => {
      const token = localStorage.getItem('__TOKEN');
      const response = await Axios.post(
        `${process.env.REACT_APP_BASE_URL}/v1/users/isSongLiked`,
        { id: forSong?.id },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      setLiked(response.data);
    };

    fetchIsLiked();
  }, [forSong]);

  const handleUnlike = async () => {
    await Axios.post(
      `${process.env.REACT_APP_BASE_URL}/v1/users/unlikeSong`,
      { id: forSong?.id },
      {
        headers: { Authorization: `Bearer ${user?.token}` },
      },
    );

    setLiked(false);
  };

  const handleLike = async () => {
    await Axios.post(
      `${process.env.REACT_APP_BASE_URL}/v1/users/likeSong`,
      { id: forSong?.id },
      {
        headers: { Authorization: `Bearer ${user?.token}` },
      },
    );

    setLiked(true);
  };

  if (isLiked) {
    return <PlaylistHeart className={styles['like-button']} onClick={() => handleUnlike()} />;
  }

  return <PlaylistHeartOutline className={styles['like-button']} onClick={() => handleLike()} />;
};

export default LikeButton;
