import React from 'react';
import './NavButton.scoped.scss';

interface Props {
  text: string;
  Icon: React.FC<{ className: string }>;
  active?: boolean;
}

const NavButton: React.FC<Props> = ({ Icon, text, active }) => {
  return (
    <div className={`navigation-button ${active && 'active'}`}>
      <Icon className={`icon ${active && 'icon-active'}`} />
      <span className={`text ${active && 'text-active'}`}>{text}</span>
    </div>
  );
};

export default NavButton;
