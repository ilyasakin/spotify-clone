import React from 'react';
import './BigButton.scss';
import '../../styles/Login.scss';

const BigButton: React.FC<{
  text: string;
  className?: string;
  variation?: 'fill' | 'outline';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
}> = ({ text, className, variation, onClick, type }) => {
  return (
    <button
      className={`bigbutton ${className || ''} ${
        variation === 'outline' ? 'bigbutton-outline' : 'bigbutton-fill'
      }`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

BigButton.defaultProps = {
  variation: 'fill',
};

export default BigButton;
