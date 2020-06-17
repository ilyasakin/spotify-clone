import React from 'react';
import './navbar.scss';
import LogoContainer from '../logo-container/logo-container';
import NavigationMenu from '../navigation-menu/navigation-menu';
import PlaylistMenu from '../playlist-menu/playlist-menu';
import PlaylistList from '../playlist-list/playlist-list';
import DownloadButton from '../download-button/download-button';

const Navbar = () => {
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
