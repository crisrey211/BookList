import { TextInput } from 'keep-react';
import React from 'react';
import './App.css';
import { Movies } from './components/Movies';
import responseMovies from './mocks/movies.json';

function App() {
  const movies = responseMovies.Search;
  return (
    <React.Fragment>
      <h1>Buscador de películas</h1>
      <TextInput
        id="input"
        placeholder="Seven, The Lord of the Rings, ... "
        color="gray"
      />
      <Movies movies={movies} />
    </React.Fragment>
  );
}

export default App;
