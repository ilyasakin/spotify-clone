import React from 'react';
import './NavMenu.scss';
import NavMenuItem from '../NavMenuItem/NavMenuItem';
import NavDivider from '../NavDivider/NavDivider';
import { PlaylistHeart, PlaylistPlus } from '../icons';

interface Props {
  className?: string;
}

const NavMenu: React.FC<Props> = ({ className }) => {
  return (
    <div className={`playlist-menu ${className}`}>
      <div className="menu-title">PLAYLISTS</div>
      <NavMenuItem text="Create a playlist" Icon={PlaylistPlus} />
      <NavMenuItem text="Liked Songs" Icon={PlaylistHeart} gradient />
      <NavDivider />
    </div>
  );
};

NavMenu.defaultProps = { className: '' };
export default NavMenu;
