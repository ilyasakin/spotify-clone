import React from 'react';
import Song from '../../types/Song';
import LikeButton from '../LikeButton/LikeButton';
import './ListItem.scoped.scss';

interface Props {
  song: Song;
}

const ListItem: React.FC<Props> = ({ song }) => (
  <div className="list-item">
    <div className="id">1</div>
    <img src="https://via.placeholder.com/40" alt={song.name} />
    <div className="song-info">
      <div className="name">song name</div>
      <div className="artist">artist</div>
    </div>
    <div className="rest">
      <LikeButton />
    </div>
  </div>
);

export default ListItem;
