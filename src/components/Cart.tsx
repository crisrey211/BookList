import React from 'react';
import './../css/cart.css';
import type { Book } from '../vite-env';

export function Cart({ books }): React.FC<Book> {
  return (
    <div className="container">
      <h4>Carrito</h4>
      <span></span>
    </div>
  );
}
