import React from 'react';
import './../css/cart.css';

export const Cart = ({ books }) => {
  const [cart, setCart] = React.useState({ books });
  console.log(cart);
  return (
    <div className="container">
      <h4>Carrito</h4>
      <span></span>
    </div>
  );
};
