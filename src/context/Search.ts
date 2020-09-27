import { createContext, Dispatch, SetStateAction } from 'react';

interface Props {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

const Search = createContext<Partial<Props>>({});

export default Search;
