import NowplayingCenter from './NowplayingCenter';

export default {
  title: 'Nowplaying Center',
};

export const nowplayingCenter: React.FC = () => {
  return (
    <div style={{ position: 'relative', top: 40 }}>
      <NowplayingCenter />
    </div>
  );
};
