import { CardComponent } from './CardComponent';
import type { ListOfMovies } from '../vite-env';

interface Props {
  movies: ListOfMovies;
}

function ListMovies({ movies }: Props) {
  return (
    <ul>
      {movies.map((item) => (
        <li key={item.imdbID}>
          <CardComponent
            id={item.imdbID}
            poster={item.Poster}
            title={item.Title}
            year={item.Year}
            type={item.Type}
          />
        </li>
      ))}
    </ul>
  );
}

function NoMoviesResults() {
  return <span>No hay nada</span>;
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;
  return hasMovies ? <ListMovies movies={movies} /> : <NoMoviesResults />;
}
