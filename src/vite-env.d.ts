/// <reference types="vite/client" />
export interface ContextProviderProps {}
export interface FiltersState {
  category: string;
  maxPage: string;
}
export interface ContextValue {
  filters: FiltersState;
  setFilters: Dispatch<SetStateAction<FiltersState>>;
}

export interface Author {
  name: string;
  otherBooks: string[];
}

export interface Book {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  id: string;
  author: Author;
}

export type ListOfBooks = Book[];
