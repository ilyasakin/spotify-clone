import React from 'react';
import './playlist-menu.scss';
import NavigationPlaylistMenuTitle from '../navigation-playlist-menu-title/navigation-playlist-menu-title';
import NavigationPlaylistMenuItem from '../navigation-playlist-menu-item/navigation-playlist-menu-item';
import NavigationDivider from '../navigation-divider/navigation-divider';
import { PlaylistHeart, PlaylistPlus } from '../icons';

const PlaylistMenu: React.FC = () => {
  return (
    <div className="playlist-menu">
      <NavigationPlaylistMenuTitle />
      <NavigationPlaylistMenuItem text="Create a playlist" Icon={PlaylistPlus} />
      <NavigationPlaylistMenuItem text="Liked Songs" Icon={PlaylistHeart} gradient />
      <NavigationDivider />
    </div>
  );
};

export default PlaylistMenu;
