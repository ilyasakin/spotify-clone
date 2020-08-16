import React from 'react';
import './Navbar.scss';
import LogoContainer from '../LogoContainer/LogoContainer';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import PlaylistMenu from '../PlaylistMenu/PlaylistMenu';
import PlaylistList from '../Playlist/Playlist';

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <LogoContainer />
      <NavigationMenu />
      <PlaylistMenu />
      <PlaylistList />
    </div>
  );
};

export default Navbar;
