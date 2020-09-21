import React from 'react';
import './NavigationMenu.scoped.scss';
import NavigationButton from '../NavigationButton/NavigationButton';
import { HomeActive, Search, Library } from '../icons';

interface Props {
  bottom?: boolean;
}

const NavigationMenu: React.FC<Props> = ({ bottom }) => {
  return (
    <div className={`navigation-menu ${bottom ? 'bottom-menu' : ''}`}>
      <NavigationButton Icon={HomeActive} text="Home" active />
      <NavigationButton Icon={Search} text="Search" />
      <NavigationButton Icon={Library} text="Library" />
    </div>
  );
};

export default NavigationMenu;
