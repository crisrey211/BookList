import { useContext } from 'react';
import { CartContext } from '../context/Cart.tsx';

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('la has caagadot io');
  }
  return context;
}
