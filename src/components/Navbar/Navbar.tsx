import React from 'react';
import './Navbar.scoped.scss';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import PlaylistMenu from '../PlaylistMenu/PlaylistMenu';
import PlaylistList from '../Playlist/Playlist';
import { Logo } from '../icons';

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <Logo className="logo" />
      <NavigationMenu />
      <PlaylistMenu />
      <PlaylistList />
    </div>
  );
};

export default Navbar;
