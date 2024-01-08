import React from 'react';
import './App.css';
import { CardComponent } from './components/CardComponent';
import { TextInput } from 'keep-react';
import responseMovies from './mocks/movies.json';

function App() {
  const movies = responseMovies.Search;
  const hasMovies = movies?.length > 0;

  const renderMovies = () => {
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
  };

  const renderNoResults = () => {
    return <span>No hay nada</span>;
  };

  return (
    <React.Fragment>
      <h1>Buscador de películas</h1>
      <TextInput id="input" placeholder="Default Input Field" color="gray" />
      {hasMovies ? renderMovies() : renderNoResults()}
    </React.Fragment>
  );
}

export default App;
