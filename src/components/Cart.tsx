import React from 'react';
import './../css/cart.css';

export const Cart = ({ books }) => {
  const [cart, setCart] = React.useState({ books });

  return (
    <div className="container">
      {JSON.stringify(cart)}
      <h4>Carrito</h4>
      <span></span>
    </div>
  );
};
