import { CardComponent } from './CardComponent';
import type { ListOfMovies } from '../vite-env';

interface Props {
  movies: ListOfMovies;
}

function ListMovies({ movies }: Props) {
  return (
    <ul>
      {movies.map((item) => (
        <li key={item.id}>
          <CardComponent
            id={item.id}
            poster={item.poster}
            title={item.title}
            year={item.year}
            type={item.type}
          />
        </li>
      ))}
    </ul>
  );
}

function NoMoviesResults() {
  return <span>No hay nada</span>;
}

export function Movies({ movies }: Props) {
  const hasMovies = movies?.length > 0;
  return hasMovies ? <ListMovies movies={movies} /> : <NoMoviesResults />;
}
