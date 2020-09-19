import React from 'react';
import './NavigationPlaylistItem.scoped.scss';

interface Props {
  text: string;
}

const NavigationPlaylistListItem: React.FC<Props> = ({ text }) => {
  return (
    <div className="playlist-item">
      <span className="text">{text}</span>
    </div>
  );
};

export default NavigationPlaylistListItem;
