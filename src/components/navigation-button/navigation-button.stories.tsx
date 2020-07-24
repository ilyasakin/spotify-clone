import React from 'react';
import NavigationButton from './navigation-button';
import { Home, HomeActive, Search, SearchActive, Library, LibraryActive } from '../icons';

export default {
  title: 'NavigationButton',
};

export const navigationButton = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
      <div style={{ display: 'grid', rowGap: 10 }}>
        <NavigationButton Icon={Home} text="Home" />
        <NavigationButton Icon={HomeActive} text="Home" active />
      </div>
      <div style={{ display: 'grid', rowGap: 10 }}>
        <NavigationButton Icon={Search} text="Search" />
        <NavigationButton Icon={SearchActive} text="Search" active />
      </div>
      <div style={{ display: 'grid', rowGap: 10 }}>
        <NavigationButton Icon={Library} text="Library" />
        <NavigationButton Icon={LibraryActive} text="Library" active />
      </div>
    </div>
  );
};
