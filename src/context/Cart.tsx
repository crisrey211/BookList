import { createContext, useState } from 'react';
import { ContextValueCart } from '../vite-env';

//1º Crear contexto
export const CartContext = createContext<ContextValueCart | null>(null);

//2º Crear provider

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    setCart((prevState) => [...prevState, { ...product }]);
  };
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
