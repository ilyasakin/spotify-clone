import React from 'react';
import './card.scss';
import { CardPlay } from '../icons';

interface Props {
  title: string;
  artist: string;
  imgsrc: string;
}
const Card: React.FC<Props> = ({ title, artist, imgsrc }) => {
  return (
    <div className="card-container">
      <div className="card-img-container">
        <img style={{ width: '100%' }} src={`${process.env.REACT_APP_BASE_URL}/${imgsrc}`} alt="" />
      </div>
      <span className="card-title">{title}</span>
      <span className="card-artist">{artist}</span>
      <div className="card-fab">
        <CardPlay className="card-fab-icon" />
      </div>
    </div>
  );
};

export default Card;
