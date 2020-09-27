import React from 'react';
import ImageFadeIn from 'react-image-fade-in';
import Song from '../../types/Song';
import LikeButton from '../LikeButton/LikeButton';
import './ListItem.scoped.scss';

interface Props {
  song: Song;
  index: number;
}

const ListItem: React.FC<Props> = ({ song, index }) => (
  <div className="list-item">
    <div className="id">{index}</div>
    <ImageFadeIn className="cover" src={`${process.env.REACT_APP_BASE_URL}/${song.cover}`} />
    <div className="song-info">
      <div className="name">{song.name}</div>
      <div className="artist">{song.artist}</div>
    </div>
    <div className="rest">
      <LikeButton forSong={song} />
    </div>
  </div>
);

export default ListItem;
