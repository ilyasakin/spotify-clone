import React from 'react';
import ListItem from '../ListItem/ListItem';
import './Search.scoped.scss';

const Search: React.FC = () => {
  return (
    <div className="search">
      <ListItem
        song={{
          _id: 'dsa',
          artist: 'dsaf',
          cover: 'dsaf',
          id: 1,
          location: 'dsaf',
          name: 'sada',
        }}
      />
      <ListItem
        song={{
          _id: 'dsa',
          artist: 'dsaf',
          cover: 'dsaf',
          id: 1,
          location: 'dsaf',
          name: 'sada',
        }}
      />
    </div>
  );
};

export default Search;
