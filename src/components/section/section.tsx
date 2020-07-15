import React from 'react';
import './section.scss';
import Card from '../card/card';

interface Props {
  title: string;
  data: Array<Songs>;
}

interface Songs {
  id: number;
  name: string;
  artist: string;
  cover: string;
}

const Section: React.FC<Props> = ({ title, data }) => {
  return (
    <div className="section">
      <div className="section-titlebar">
        <div className="section-title">
          <span className="section-title-text">{title}</span>
        </div>
        <div className="section-titlebar-btn">
          <span className="section-titlebar-btn-text">SEE ALL</span>
        </div>
      </div>
      <div className="section-content">
        {data.map((song: Songs) => {
          return <Card song={song} key={song.id} />;
        })}
      </div>
    </div>
  );
};

export default Section;
