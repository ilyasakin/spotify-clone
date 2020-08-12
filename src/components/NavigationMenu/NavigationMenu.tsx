import React from 'react';
import './NavigationMenu.scss';
import NavigationButton from '../NavigationButton/NavigationButton';
import { HomeActive, Search, Library } from '../icons';

const NavigationMenu: React.FC = () => {
  return (
    <div className="navigation-menu">
      <NavigationButton Icon={HomeActive} text="Home" active />
      <NavigationButton Icon={Search} text="Search" />
      <NavigationButton Icon={Library} text="Library" />
    </div>
  );
};

export default NavigationMenu;
