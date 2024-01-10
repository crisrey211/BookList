import { CardComponent } from './CardComponent';
import type { ListOfBooks } from '../vite-env';
import '../css/books.css';

interface Props {
  books: ListOfBooks;
}

function ListBooks({ books }: Props) {
  return (
    <ul className="container">
      {books.map((item) => (
        <li key={item.id}>
          <CardComponent
            id={item.id}
            cover={item.cover}
            title={item.title}
            author={item.author}
            year={item.year}
            pages={item.pages}
            genre={item.genre}
            synopsis={item.synopsis}
          />
        </li>
      ))}
    </ul>
  );
}

function NoBooksResults() {
  return <span>No hay nada</span>;
}

export function Movies({ books }: Props) {
  const hasMovies = books?.length > 0;
  return hasMovies ? <ListBooks books={books} /> : <NoBooksResults />;
}
