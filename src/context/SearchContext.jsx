import { createContext, useState } from 'react';

const SearchContext = createContext({
  searchTerm: 'octocat',
  results: {},
});

const SearchContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('octocat');

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchContextProvider };
