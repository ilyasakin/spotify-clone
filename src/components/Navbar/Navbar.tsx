import React from 'react';
import './Navbar.scss';
import LogoContainer from '../LogoContainer/LogoContainer';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import PlaylistMenu from '../PlaylistMenu/PlaylistMenu';
import PlaylistList from '../Playlist/Playlist';
import DownloadButton from '../DownloadButton/DownloadButton';

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <LogoContainer />
      <NavigationMenu />
      <PlaylistMenu />
      <PlaylistList />
      <DownloadButton />
    </div>
  );
};

export default Navbar;
