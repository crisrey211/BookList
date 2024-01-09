import { TextInput } from 'keep-react';
import React from 'react';
import './App.css';
import { Movies } from './components/Movies';
import responseMovies from './mocks/movies.json';

const useMovies = () => {
  const movies = responseMovies.Search;
  const mappedMovies = movies?.map((item) => ({
    id: item.imdbID,
    poster: item.Poster,
    title: item.Title,
    year: item.Year,
    type: item.Type,
  }));

  return { movies: mappedMovies };
};

function App() {
  const { movies: mappedMovies } = useMovies();
  return (
    <React.Fragment>
      <h1>Buscador de películas</h1>
      <TextInput
        id="input"
        placeholder="Seven, The Lord of the Rings, ... "
        color="gray"
      />
      <Movies movies={mappedMovies} />
    </React.Fragment>
  );
}

export default App;
