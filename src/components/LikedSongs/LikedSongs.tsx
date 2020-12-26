import { /** useEffect, */ useEffect, useState } from 'react';
// import axios from 'axios';
import { ImpulseSpinner } from 'react-spinners-kit';
import Axios from 'axios';
import styles from './LikedSongs.module.scss';
import Song from '../../types/Song';
import ListItem from '../ListItem/ListItem';
import { ReactComponent as NoResult } from '../../assets/images/no-result.svg';

const LikedSongs: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await Axios.get(`${process.env.REACT_APP_BASE_URL}/v1/music/likedSongs`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('__TOKEN')}` },
      });

      setLoading(false);
      setResult(response.data);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className={`${styles['liked-songs']} ${styles['no-result']}`}>
        <ImpulseSpinner frontColor="#1db954" />
      </div>
    );
  }

  if (result.length === 0) {
    return (
      <div className={`${styles['liked-songs']} ${styles['no-result']}`}>
        <NoResult className={styles['no-result-image']} />
      </div>
    );
  }

  return (
    <div className={styles['liked-songs']}>
      {result.map((song: Song, index) => {
        return <ListItem song={song} index={index + 1} key={`search-${song.name}`} />;
      })}
    </div>
  );
};

export default LikedSongs;
