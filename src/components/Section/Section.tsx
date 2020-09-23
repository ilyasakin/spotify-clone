import React from 'react';
import './Section.scoped.scss';
import Card from '../Card/Card';
import Song from '../../types/Song';

interface Props {
  title: string;
  data: Song[];
}

const Section: React.FC<Props> = ({ title, data }) => {
  return (
    <div className="section">
      <div className="titlebar">
        <div className="title">{title}</div>
        <div className="titlebar-button">SEE ALL</div>
      </div>
      <div className="content">
        {data.map((song: Song) => {
          return <Card song={song} key={song._id} />;
        })}
      </div>
    </div>
  );
};

export default Section;
