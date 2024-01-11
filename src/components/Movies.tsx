import { CardComponent } from './CardComponent';
import type { ListOfBooks } from '../vite-env';
import '../css/books.css';

interface Props {
  books: ListOfBooks;
}

function ListBooks({ books }: Props) {
  return (
    <div className="grid grid-cols-3 grid-rows-4 ">
      {books.map((item) => (
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
