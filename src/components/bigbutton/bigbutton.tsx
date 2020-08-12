import React from 'react';
import './bigbutton.scss';

const BigButton: React.FC<{ text: string }> = ({ text }) => {
  return <button className="bigbutton">{text}</button>;
};

export default BigButton;
