import { CardComponent } from './CardComponent';
import type { ListOfBooks } from '../vite-env';
import '../css/books.css';
import React from 'react';
import { useCart } from '../mocks/useCart.js';

interface Props {
  books: ListOfBooks;
}

function ListBooks({ books }: Props) {
  const { addToCart } = useCart();
  return (
    <div className="grid grid-cols-3 grid-rows-4 ">
      {books.map((item) => (
        <React.Fragment>
          <CardComponent
            key={item.id}
            id={item.id}
            cover={item.cover}
            title={item.title}
            author={item.author}
            year={item.year}
            pages={item.pages}
            genre={item.genre}
            synopsis={item.synopsis}
          />
          <button onClick={() => addToCart(item)}>Comprar</button>
        </React.Fragment>
      ))}
    </div>
  );
}

function NoBooksResults() {
  return <span>No hay nada</span>;
}

export function Movies({ books }: Props) {
  const hasMovies = books?.length > 0;
  return hasMovies ? <ListBooks books={books} /> : <NoBooksResults />;
}
