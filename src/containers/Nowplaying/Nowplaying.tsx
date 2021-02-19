import styles from './Nowplaying.module.scss';
import NowplayingLeft from '../../components/NowplayingLeft/NowplayingLeft';
import NowplayingRight from '../../components/NowplayingRight/NowplayingRight';
import NowplayingCenter from '../../components/NowplayingCenter/NowplayingCenter';
import Nav from '../../components/Nav/Nav';

const Nowplaying: React.FC = () => {
  return (
    <div className={styles.nowplaying}>
      <NowplayingLeft />
      <NowplayingCenter />
      <NowplayingRight />

      {/* For mobile */}
      <Nav bottom />
    </div>
  );
};

export default Nowplaying;
