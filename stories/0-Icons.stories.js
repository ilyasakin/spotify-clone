import React from 'react';

import * as Icons from '../src/components/icons';

export default {
  title: 'Icons',
};

export const Icon = () => (
  <div>
    <Icons.Logo style={{ height: '40px', width: '131px', color: '#000' }} />
    <Icons.TopbarPp />
    <Icons.Back />
    <Icons.Forward />
    <Icons.Home />
    <Icons.HomeActive />
    <Icons.Library />
    <Icons.LibraryActive />
    <Icons.Search />
    <Icons.SearchActive />
    <Icons.ShuffleIcon />
    <Icons.PreviousIcon />
    <Icons.PlayIcon />
    <Icons.NextIcon />
    <Icons.RepeatIcon />
    <Icons.Playlist />
    <Icons.Devices />
    <Icons.Volume />
  </div>
);
