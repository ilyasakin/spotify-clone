import React from 'react';
import './BigButton.scss';
import '../../styles/Login.scss';

const BigButton: React.FC<{ text: string; className?: string; variation?: 'fill' | 'outline' }> = ({
  text,
  className,
  variation,
}) => {
  return (
    <button
      className={`bigbutton ${className || ''} ${
        variation === 'outline' ? 'bigbutton-outline' : 'bigbutton-fill'
      }`}
    >
      {text}
    </button>
  );
};

BigButton.defaultProps = {
  variation: 'fill',
};

export default BigButton;
