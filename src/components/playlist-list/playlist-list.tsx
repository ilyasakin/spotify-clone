import React from 'react';
import './playlist-list.scss';
import NavigationPlaylistListItem from '../navigation-playlist-list-item/navigation-playlist-list-item';

const PlaylistList = () => {
  return (
    <div className="playlist-list">
      <NavigationPlaylistListItem text="playlist placeholder" />
      <NavigationPlaylistListItem text="playlist placeholder" />
      <NavigationPlaylistListItem text="playlist placeholder" />
    </div>
  );
};

export default PlaylistList;
