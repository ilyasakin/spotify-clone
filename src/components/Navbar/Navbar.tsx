import React from 'react';
import './Navbar.scoped.scss';
import Nav from '../Nav/Nav';
import NavMenu from '../NavMenu/NavMenu';
import NavList from '../NavList/NavList';
import { Logo } from '../icons';

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <Logo className="logo" />
      <Nav />
      <NavMenu />
      <NavList />
    </div>
  );
};

export default Navbar;
