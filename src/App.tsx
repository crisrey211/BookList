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
  const [products] = React.useState(mappedBooks);
  const [filters, setFilters] = React.useState({
    category: 'all',
    maxPrice: 1200,
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.pages <= filters.maxPrice &&
        (product.genre === filters.category || filters.category === 'all')
      );
    });
  };
  const filteredProducts = filterProducts(products);
  console.log(filteredProducts);
  return (
    <React.Fragment>
      <h1>Buscador de libros</h1>
      <Filters onChange={setFilters} />
      <TextInput
        id="input"
        placeholder="Seven, The Lord of the Rings, ... "
        color="gray"
      />
      <div style={{ display: 'flex' }}>
        <Movies books={filteredProducts} />
        <Cart books={products} />
      </div>
    </React.Fragment>
  );
}

export default App;
