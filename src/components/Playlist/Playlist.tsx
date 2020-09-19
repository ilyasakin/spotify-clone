import React from 'react';
import './Playlist.scoped.scss';
import NavigationPlaylistListItem from '../NavigationPlaylistItem/NavigationPlaylistItem';

const PlaylistList: React.FC = () => {
  return (
    <div className="playlist-list">
      <NavigationPlaylistListItem text="playlist placeholder" />
      <NavigationPlaylistListItem text="playlist placeholder" />
      <NavigationPlaylistListItem text="playlist placeholder" />
    </div>
  );
};

export default PlaylistList;
