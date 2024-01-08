/// <reference types="vite/client" />

export interface Movie {
  poster: string;
  title: string;
  year: string;
  id: string;
  type: string;
}

export type ListOfMovies = Movie[];
