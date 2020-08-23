import React from 'react';
import './BigButton.scss';
import '../../styles/Login.scss';

const BigButton: React.FC<{
  text: string;
  className?: string;
  variation?: 'fill' | 'outline' | 'pop';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
}> = ({ text, className, variation, onClick, type }) => {
  return (
    <button
      className={`bigbutton bigbutton-${variation} ${className || ''}`}
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
