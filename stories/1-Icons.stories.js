import React from 'react';

import * as Icons from '../src/components/icons';
import '../src/styles/storybook/icons.scss';

export default {
  title: 'Icons',
};

export const Icon = () => (
  <div className="view">
    <Icons.Back />
    <Icons.Forward />
    <Icons.Home />
    <Icons.HomeActive />
    <Icons.Library />
    <Icons.LibraryActive />
    <Icons.Search />
    <Icons.SearchActive />
    <Icons.PlaylistPlus />
    <Icons.PlaylistHeart />
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
