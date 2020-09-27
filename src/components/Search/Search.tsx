import React, { useContext } from 'react';
import './Search.scoped.scss';
import SearchContext from '../../context/Search';

const Search: React.FC = () => {
  const { search } = useContext(SearchContext);

  return (
    <div className="search">
      <h1>{search}</h1>
    </div>
  );
};

export default Search;
