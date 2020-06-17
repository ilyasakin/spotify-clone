import React from 'react';
import './navigation-menu.scss';
import NavigationButton from '../navigation-button/navigation-button';
import { HomeActive, Search, Library } from '../icons';

const NavigationMenu = () => {
  return (
    <div className="navigation-menu">
      <NavigationButton Icon={HomeActive} text="Home" active />
      <NavigationButton Icon={Search} text="Search" />
      <NavigationButton Icon={Library} text="Library" />
    </div>
  );
};

export default NavigationMenu;
