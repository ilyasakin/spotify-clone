import React from 'react';
import './main.scss';
import Section from '../section/section';

const Main: React.FC = () => {
  return (
    <div className="main">
      <div className="main-padding">
        <Section title="Songs" data={[{ title: 'test title', artist: 'test artist' }]} />
      </div>
    </div>
  );
};

export default Main;
