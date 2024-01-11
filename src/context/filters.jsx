import React, { createContext } from 'react';

//1. Se crea el contexto
export const FiltersContext = createContext();

//2. Crea el Provider, para proveer
export function FiltersProvider({ children }) {
  const [filters, setFilters] = React.useState({
    category: 'all', maxPage: '1200'
  })

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
