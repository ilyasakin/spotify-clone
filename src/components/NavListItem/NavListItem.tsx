import React from 'react';
import './NavListItem.scoped.scss';

interface Props {
  text: string;
}

const NavListItem: React.FC<Props> = ({ text }) => {
  return (
    <div className="playlist-item">
      <span className="text">{text}</span>
    </div>
  );
};

export default NavListItem;
