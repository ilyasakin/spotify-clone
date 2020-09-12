import React from 'react';
import './OverviewMenuItem.scss';

interface Props {
  text: string;
  indicator?: boolean;
  Icon?: React.FC<{ className?: string }>;
}

const OverviewMenuItem: React.FC<Props> = ({ text, indicator, Icon }) => {
  return (
    <div className="overview-menu-item-container" role="button">
      <div
        className={`overview-menu-item-indicator ${indicator ? 'overview-menu-item-indicate' : ''}`}
      />
      <div className="overview-menu-item-text">
        {Icon && <Icon className="overview-menu-item-icon" />}
        {text}
      </div>
    </div>
  );
};

export default OverviewMenuItem;
