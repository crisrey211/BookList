import React, { createContext } from 'react';
import type {
  ContextProviderProps,
  ContextValue,
  FiltersState,
} from '../vite-env';

//1. Se crea el contexto
export const FiltersContext = createContext<ContextValue | null>(null);

//2. Crea el Provider, para proveer
export function FiltersProvider({ children }): React.FC<ContextProviderProps> {
  const [filters, setFilters] = React.useState<FiltersState>({
    category: 'all',
    maxPage: '1200',
  });

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
