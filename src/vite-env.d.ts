/// <reference types="vite/client" />

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
