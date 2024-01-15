import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { FiltersProvider } from './context/Filters';
import { CartProvider } from './context/Cart';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <FiltersProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </FiltersProvider>,
);
