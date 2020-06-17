import React from 'react';
import NavigationPlaylistMenuItem from './navigation-playlist-menu-item';
import { PlaylistHeart, PlaylistPlus } from '../icons';

export default {
  title: 'NavigationPlaylistMenuItem',
};

export const navigationPlaylistMenuItem = () => {
  return (
    <div>
      <NavigationPlaylistMenuItem text="Create a playlist" Icon={PlaylistPlus} />
      <NavigationPlaylistMenuItem text="Liked Songs" Icon={PlaylistHeart} gradient />
    </div>
  );
};
