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

  if (songs.length < 1) {
    return (
      <div className={styles.main}>
        <div className={styles['loading-indicator']}>
          <ImpulseSpinner frontColor="#1db954" />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.main}>
      <Section title="Songs" data={songs} />
      {(recentlyPlayed as Song[]).length >= 1 && (
        <Section title="Recently Played" data={recentlyPlayed as Song[]} noSeeAll />
      )}
    </div>
  );
};

export default Main;
