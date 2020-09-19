import React from 'react';
import './NavigationPlaylistMenuItem.scoped.scss';

interface Props {
  text: string;
  Icon: React.FC<{ className: string }>;
  gradient?: boolean;
}

const NavigationPlaylistMenuItem: React.FC<Props> = ({ Icon, text, gradient }) => {
  return (
    <div className="playlist-menu-item">
      <div className={`icon-container ${gradient && 'gradient'}`}>
        <Icon className={`icon ${gradient ? 'white-color' : ''}`} />
      </div>
      <span className="text">{text}</span>
    </div>
  );
};

export default NavigationPlaylistMenuItem;
