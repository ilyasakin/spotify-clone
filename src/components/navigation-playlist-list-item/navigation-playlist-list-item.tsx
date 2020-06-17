import React from 'react';
import './navigation-playlist-list-item.scss';

interface Props {
  text: string;
}

const NavigationPlaylistListItem: React.FC<Props> = ({ text }) => {
  return (
    <div className="playlist-list-item-container">
      <div className="playlist-list-item-inner-frame">
        <span className="playlist-list-item-text">{text}</span>
      </div>
    </div>
  );
};

export default NavigationPlaylistListItem;
