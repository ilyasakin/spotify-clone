import React from 'react';
import './main.scss';
import Section from '../section/section';

const Main: React.FC = () => {
  return (
    <div className="main">
      <div className="main-padding">
        <Section />
        <Section />
      </div>
    </div>
  );
};

export default Main;
