import React from 'react';
import './OverviewMenuItem.scss';

const OverviewMenuItem: React.FC<{ text: string; indicator?: boolean }> = ({ text, indicator }) => {
  return (
    <div className="overview-menu-item-container" role="button">
      <div
        className={`overview-menu-item-indicator ${indicator ? 'overview-menu-item-indicate' : ''}`}
      />
      <div className="overview-menu-item-text">{text}</div>
    </div>
  );
};

export default OverviewMenuItem;
