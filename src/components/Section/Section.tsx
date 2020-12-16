import './Section.scoped.scss';
import { useHistory } from 'react-router-dom';
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
    <div className="section">
      <div className="titlebar">
        <div className="title">{title}</div>
        {!noSeeAll && (
          <button className="titlebar-button" onClick={() => history.push('/player/playlist')}>
            SEE ALL
          </button>
        )}
      </div>
      <div className="content">
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
