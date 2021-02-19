import { useContext, useEffect, useState } from 'react';
import Axios from 'axios';
import { ImpulseSpinner } from 'react-spinners-kit';
import styles from './Search.module.scss';
import SearchContext from '../../context/Search';
import Song from '../../types/Song';
import ListItem from '../../components/ListItem/ListItem';
import { ReactComponent as NoResult } from '../../assets/images/no-result.svg';

const Search: React.FC = () => {
  const { search } = useContext(SearchContext);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await Axios.get(
        `${process.env.REACT_APP_BASE_URL}/v1/music/search/${search}`,
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
      <div className={`${styles.search} ${styles['no-result']}`}>
        <ImpulseSpinner frontColor="#1db954" />
      </div>
    );
  }

  if (result.length === 0) {
    return (
      <div className={`${styles.search} ${styles['no-result']}`}>
        <NoResult className={styles['no-result-image']} />
      </div>
    );
  }

  return (
    <div className={styles.search}>
      {result.map((song: Song, index) => {
        return <ListItem song={song} index={index + 1} key={`search-${song.name}`} />;
      })}
    </div>
  );
};

export default Search;
