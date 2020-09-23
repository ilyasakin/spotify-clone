import React from 'react';
import './NavMenu.scss';
import NavMenuItem from '../NavMenuItem/NavMenuItem';
import NavDivider from '../NavDivider/NavDivider';
import { PlaylistHeart, PlaylistPlus } from '../icons';

const NavMenu: React.FC = () => {
  return (
    <div className="playlist-menu">
      <div className="menu-title">PLAYLISTS</div>
      <NavMenuItem text="Create a playlist" Icon={PlaylistPlus} />
      <NavMenuItem text="Liked Songs" Icon={PlaylistHeart} gradient />
      <NavDivider />
    </div>
  );
};

export default NavMenu;
