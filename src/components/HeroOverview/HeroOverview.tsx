import React from 'react';
import './HeroOverview.scoped.scss';

const HeroOverview: React.FC<{ HeroTitle: string; HeroBody: string }> = ({
  HeroTitle,
  HeroBody,
}) => {
  return (
    <div className="hero">
      <div style={{ alignSelf: 'center' }}>
        <h2 className="title">{HeroTitle}</h2>
        <p className="body">{HeroBody}</p>
      </div>
    </div>
  );
};

export default HeroOverview;
