import { useContext } from 'react';
import { Search } from '../icons';
import style from './SearchBar.module.scss';
import SearchContext from '../../context/Search';

const SearchBar: React.FC = () => {
  const { search, setSearch } = useContext(SearchContext);

  return (
    <div className={style.searchbar}>
      <Search />
      <input placeholder="Search" value={search} onChange={(e) => setSearch?.(e.target.value)} />
    </div>
  );
};

export default SearchBar;
