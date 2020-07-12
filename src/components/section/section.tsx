import React from 'react';
import './section.scss';
import Card from '../card/card';

interface Props {
  title: string;
  data: Array<Songs>;
}

interface Songs {
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
          return <Card title={song.name} artist={song.artist} imgsrc={song.cover} />;
        })}
      </div>
    </div>
  );
};

export default Section;
