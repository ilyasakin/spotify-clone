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
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: 24 }}>
        <NavMenu className="nav-menu" />
        <NavList />
      </div>
    </div>
  );
};

export default Navbar;
