import React from 'react';
import './PlaylistMenu.scss';
import NavigationPlaylistMenuTitle from '../NavigationPlaylistMenuTitle/NavigationPlaylistMenuTitle';
import NavigationPlaylistMenuItem from '../NavigationPlaylistMenuItem/NavigationPlaylistMenuItem';
import NavigationDivider from '../NavigationDivider/NavigationDivider';
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
