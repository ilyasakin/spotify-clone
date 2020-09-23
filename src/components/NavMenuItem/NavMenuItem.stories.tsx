import React from 'react';
import NavMenuItem from './NavMenuItem';
import { PlaylistHeart, PlaylistPlus } from '../icons';

export default {
  title: 'NavigationPlaylistMenuItem',
};

export const navigationPlaylistMenuItem = () => {
  return (
    <div>
      <NavMenuItem text="Create a playlist" Icon={PlaylistPlus} />
      <NavMenuItem text="Liked Songs" Icon={PlaylistHeart} gradient />
    </div>
  );
};
