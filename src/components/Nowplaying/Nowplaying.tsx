import React from 'react';
import './Nowplaying.scoped.scss';
import NowplayingLeft from '../NowplayingLeft/NowplayingLeft';
import NowplayingRight from '../NowplayingRight/NowplayingRight';
import NowplayingCenter from '../NowplayingCenter/NowplayingCenter';
import NavigationMenu from '../NavigationMenu/NavigationMenu';

const Nowplaying: React.FC = () => {
  return (
    <div className="nowplaying">
      <NowplayingLeft />
      <NowplayingCenter />
      <NowplayingRight />

      {/* For mobile */}
      <NavigationMenu bottom />
    </div>
  );
};

export default Nowplaying;
