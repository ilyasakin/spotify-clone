import React from 'react';
import './nowplaying.scss';
import NowplayingLeft from '../nowplaying-left/nowplaying-left';
import NowplayingRight from '../nowplaying-right/nowplaying-right';
import NowplayingCenter from '../nowplaying-center/nowplaying-center';

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
