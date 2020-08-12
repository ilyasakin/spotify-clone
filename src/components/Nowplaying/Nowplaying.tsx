import React from 'react';
import './Nowplaying.scss';
import NowplayingLeft from '../NowplayingLeft/NowplayingLeft';
import NowplayingRight from '../NowplayingRight/NowplayingRight';
import NowplayingCenter from '../NowplayingCenter/NowplayingCenter';

const Nowplaying: React.FC = () => {
  return (
    <div className="nowplaying">
      <div className="nowplaying-padding">
        <NowplayingLeft />
        <NowplayingCenter />
        <NowplayingRight />
      </div>
    </div>
  );
};

export default Nowplaying;
