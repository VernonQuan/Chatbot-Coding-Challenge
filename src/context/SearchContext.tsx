import { createContext, useContext, useState, ReactNode } from 'react';

type SearchContextValue = {
  term: string,
  setTerm: (term: string) => void,
};

const SearchContext = createContext<SearchContextValue | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [term, setTerm] = useState('');
  return (
    <SearchContext.Provider value={{ term, setTerm }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context == null) {
    throw new Error('useSearch must be used within a <SearchProvider>');
  }
  return context;
}