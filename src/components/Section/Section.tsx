import { useHistory } from 'react-router-dom';
import styles from './Section.module.scss';
import Card from '../Card/Card';
import Song from '../../types/Song';

interface Props {
  title: string;
  data: Song[];
  noSeeAll?: boolean;
  seeAllPath?: string;
}

const Section: React.FC<Props> = ({ title, data, noSeeAll }) => {
  const history = useHistory();

  return (
    <div className={styles.section}>
      <div className={styles.titlebar}>
        <div className={styles.title}>{title}</div>
        {!noSeeAll && (
          <button
            className={styles['titlebar-button']}
            onClick={() => history.push('/player/playlist')}
          >
            SEE ALL
          </button>
        )}
      </div>
      <div className={styles.content}>
        {data.map((song: Song) => {
          return <Card song={song} key={song._id} />;
        })}
      </div>
    </div>
  );
};

Section.defaultProps = {
  noSeeAll: false,
};

export default Section;
