import React from 'react';
import './PillMenu.scss';

interface Props {
  className?: string | undefined;
  Text: string | undefined;
}
const PillMenu: React.FC<Props> = ({ className, Text }) => {
  return (
    <button className={`pill-menu ${className || ''}`}>
      <img className="pill-menu-img" alt="avatar" src="https://via.placeholder.com/28" />
      <span className="pill-menu-text">{Text || ''}</span>
    </button>
  );
};

export default PillMenu;
