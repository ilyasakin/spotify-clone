import React from 'react';
import './Section.scoped.scss';
import Card from '../Card/Card';

interface Props {
  title: string;
  data: Array<Songs>;
}

interface Songs {
  _id: string;
  name: string;
  artist: string;
  cover: string;
}

const Section: React.FC<Props> = ({ title, data }) => {
  return (
    <div className="section">
      <div className="titlebar">
        <div className="title">{title}</div>
        <div className="titlebar-button">SEE ALL</div>
      </div>
      <div className="content">
        {data.map((song: Songs) => {
          // eslint-disable-next-line no-underscore-dangle
          return <Card song={song} key={song._id} />;
        })}
      </div>
    </div>
  );
};

export default Section;
