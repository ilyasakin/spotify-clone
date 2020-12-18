import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ImpulseSpinner } from 'react-spinners-kit';
import styles from './Main.module.scss';
import Section from '../Section/Section';
import Song from '../../types/Song';
import RecentlyPlayed from '../../context/RecentlyPlayed';

const Main: React.FC = () => {
  const { recentlyPlayed } = useContext(RecentlyPlayed);
  const [data, setData] = useState<Song[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get(`${process.env.REACT_APP_BASE_URL}/v1/music`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('__TOKEN')}` },
      });
      setData(resp.data);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.main}>
      {data.length < 1 ? (
        <div className={styles['loading-indicator']}>
          <ImpulseSpinner frontColor="#1db954" />
        </div>
      ) : (
        <>
          <Section title="Songs" data={data} />
          {recentlyPlayed && recentlyPlayed.length >= 1 && (
            <Section title="Recently Played" data={recentlyPlayed} noSeeAll />
          )}
        </>
      )}
    </div>
  );
};

export default Main;
