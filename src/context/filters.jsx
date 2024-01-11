import { createContext } from 'react';

//1. Se crea el contexto
export const FiltersContext = createContext();

//2. Crea el Provider, para proveer
export function FiltersProvider({ children }) {
  return (
    <FiltersContext.Provider value={{ category: 'all', maxPrice: '1200' }}>
      {children}
    </FiltersContext.Provider>
  );
}
