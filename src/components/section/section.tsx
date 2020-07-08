import React from 'react';
import './section.scss';
import Card from '../card/card';

const Section: React.FC = () => {
  return (
    <div className="section">
      <div className="section-titlebar">
        <div className="section-title">
          <span className="section-title-text">Recently played</span>
        </div>
        <div className="section-titlebar-btn">
          <span className="section-titlebar-btn-text">SEE ALL</span>
        </div>
      </div>
      <div className="section-content">
        <Card title="placeholder" artist="placeholder" />
        <Card title="placeholder" artist="placeholder" />
      </div>
    </div>
  );
};

export default Section;
