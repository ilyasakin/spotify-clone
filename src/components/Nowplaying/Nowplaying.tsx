import React from 'react';
import './Nowplaying.scoped.scss';
import NowplayingLeft from '../NowplayingLeft/NowplayingLeft';
import NowplayingRight from '../NowplayingRight/NowplayingRight';
import NowplayingCenter from '../NowplayingCenter/NowplayingCenter';

const Nowplaying: React.FC = () => {
  return (
    <div className="nowplaying">
      <NowplayingLeft />
      <NowplayingCenter />
      <NowplayingRight />
    </div>
  );
};

export default Nowplaying;
