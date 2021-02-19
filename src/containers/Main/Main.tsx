import { useContext } from 'react';
import { ImpulseSpinner } from 'react-spinners-kit';
import styles from './Main.module.scss';
import Section from '../../components/Section/Section';
import Song from '../../types/Song';
import RecentlyPlayed from '../../context/RecentlyPlayed';

interface Props {
  songs: Song[];
}

const Main: React.FC<Props> = ({ songs }) => {
  const { recentlyPlayed } = useContext(RecentlyPlayed);

  return (
    <div className={styles.main}>
      {songs.length < 1 ? (
        <div className={styles['loading-indicator']}>
          <ImpulseSpinner frontColor="#1db954" />
        </div>
      ) : (
        <>
          <Section title="Songs" data={songs} />
          {recentlyPlayed && recentlyPlayed.length >= 1 && (
            <Section title="Recently Played" data={recentlyPlayed} noSeeAll />
          )}
        </>
      )}
    </div>
  );
};

export default Main;
