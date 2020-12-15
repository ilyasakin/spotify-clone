import React, { useContext, useEffect, useState } from 'react';
import './Search.scoped.scss';
import Axios from 'axios';
import { ImpulseSpinner } from 'react-spinners-kit';
import SearchContext from '../../context/Search';
import Song from '../../types/Song';
import ListItem from '../ListItem/ListItem';
import { ReactComponent as NoResult } from '../../assets/images/no-result.svg';

const Search: React.FC = () => {
  const { search } = useContext(SearchContext);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await Axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/music/search/${search}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('__TOKEN')}` },
        },
      );

      setLoading(false);
      setResult(response.data);
    };

    fetchData();
  }, [search]);

  if (loading) {
    return (
      <div className="search no-result">
        <ImpulseSpinner frontColor="#1db954" />
      </div>
    );
  }

  if (result.length === 0) {
    return (
      <div className="search no-result">
        <NoResult className="no-result-image" />
      </div>
    );
  }

  return (
    <div className="search">
      {result.map((song: Song, index) => {
        return <ListItem song={song} index={index + 1} />;
      })}
    </div>
  );
};

export default Search;
