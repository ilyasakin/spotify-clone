import React from 'react';
import './HeroOverview.scss';

const HeroOverview: React.FC<{ HeroTitle: string; HeroBody: string }> = ({
  HeroTitle,
  HeroBody,
}) => {
  return (
    <div className="hero-container">
      <div style={{ alignSelf: 'center' }}>
        <h2 className="hero-title">{HeroTitle}</h2>
        <p className="hero-body">{HeroBody}</p>
      </div>
    </div>
  );
};

export default HeroOverview;
