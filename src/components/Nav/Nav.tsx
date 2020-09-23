import React from 'react';
import './Nav.scoped.scss';
import NavButton from '../NavButton/NavButton';
import { HomeActive, Search, Library } from '../icons';

interface Props {
  bottom?: boolean;
}

const Nav: React.FC<Props> = ({ bottom }) => {
  return (
    <div className={`navigation-menu ${bottom ? 'bottom-menu' : ''}`}>
      <NavButton Icon={HomeActive} text="Home" active />
      <NavButton Icon={Search} text="Search" />
      <NavButton Icon={Library} text="Library" />
    </div>
  );
};

export default Nav;
