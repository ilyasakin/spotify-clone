import React from 'react';
import './navigation-button.scss';

interface Props {
  text: string;
  Icon: React.FC<{ className: string }>;
  active?: boolean;
}

const NavigationButton: React.FC<Props> = ({ Icon, text, active }) => {
  return (
    <div className={`btn-container ${active && 'active'}`}>
      <Icon className={`icon ${active && 'icon-active'}`} />
      <span className={`text ${active && 'text-active'}`}>{text}</span>
    </div>
  );
};

export default NavigationButton;
