import { TextInput } from 'keep-react';
import React from 'react';
import './App.css';
import { Movies } from './components/Movies';
import responseMovies from './mocks/books.json';
import Filters from './components/Filters';
import { Cart } from './components/Cart';

const useMovies = () => {
  const books = responseMovies.library;
  const mappedBooks = books?.map((item) => ({
    title: item.book.title,
    pages: item.book.pages,
    genre: item.book.genre,
    cover: item.book.cover,
    synopsis: item.book.synopsis,
    year: item.book.year,
    id: item.book.ISBN,
    author: item.book.author,
  }));

  return { books: mappedBooks };
};

function App() {
  const { books: mappedBooks } = useMovies();
  const [form, setForm] = React.useState('');
  const handleSubmit = (ev) => {
    ev.preventeDefault;
    setForm(ev.target.value);
  };

  return (
    <React.Fragment>
      <h1>Buscador de libros</h1>
      <Filters />
      <TextInput
        id="input"
        placeholder="Seven, The Lord of the Rings, ... "
        color="gray"
        handleOnChange={handleSubmit}
        value={form}
      />
      <div style={{ display: 'flex' }}>
        <Movies books={mappedBooks} />
        <Cart books={mappedBooks} />
      </div>
    </React.Fragment>
  );
}

export default App;
