import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Button } from 'keep-react';
import responseMovies from './mocks/movies.json';
import './App.css';

function App() {
  const [movies, setMovies] = React.useState(responseMovies.Search);
  const hasMovies = movies?.length > 0;

  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Buscador de películas</h1>

      {hasMovies ? (
        <ul>
          {movies.map((item) => (
            <li key={item.imdbID}>
              <h3>{item.Title}</h3>
            </li>
          ))}
        </ul>
      ) : (
        <span>'no hay nada'</span>
      )}
      <Button size="md">Default</Button>
    </>
  );
}

export default App;
