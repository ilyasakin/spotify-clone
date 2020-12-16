import './Nowplaying.scoped.scss';
import NowplayingLeft from '../NowplayingLeft/NowplayingLeft';
import NowplayingRight from '../NowplayingRight/NowplayingRight';
import NowplayingCenter from '../NowplayingCenter/NowplayingCenter';
import Nav from '../Nav/Nav';

const Nowplaying: React.FC = () => {
  return (
    <div className="nowplaying">
      <NowplayingLeft />
      <NowplayingCenter />
      <NowplayingRight />

      {/* For mobile */}
      <Nav bottom />
    </div>
  );
};

export default Nowplaying;
