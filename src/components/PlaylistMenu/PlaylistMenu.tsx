import React from 'react';
import './PlaylistMenu.scss';
import NavigationPlaylistMenuItem from '../NavigationPlaylistMenuItem/NavigationPlaylistMenuItem';
import NavigationDivider from '../NavigationDivider/NavigationDivider';
import { PlaylistHeart, PlaylistPlus } from '../icons';

const PlaylistMenu: React.FC = () => {
  return (
    <div className="playlist-menu">
      <div className="menu-title">PLAYLISTS</div>
      <NavigationPlaylistMenuItem text="Create a playlist" Icon={PlaylistPlus} />
      <NavigationPlaylistMenuItem text="Liked Songs" Icon={PlaylistHeart} gradient />
      <NavigationDivider />
    </div>
  );
};

export default PlaylistMenu;
