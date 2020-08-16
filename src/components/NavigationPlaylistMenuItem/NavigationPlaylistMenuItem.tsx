import React from 'react';
import './NavigationPlaylistMenuItem.scss';

interface Props {
  text: string;
  Icon: React.FC<{ className: string }>;
  gradient?: boolean;
}

const NavigationPlaylistMenuItem: React.FC<Props> = ({ Icon, text, gradient }) => {
  return (
    <div className="btn-container-playlist-item">
      <div className="playlist-menu-inner-frame">
        <div
          className={`playlist-menu-icon-container ${gradient && 'playlist-menu-icon-gradient'}`}
        >
          <Icon className={`playlist-menu-icon ${gradient ? 'white-color' : ''}`} />
        </div>
        <span className="playlist-menu-text">{text}</span>
      </div>
    </div>
  );
};

export default NavigationPlaylistMenuItem;
