import { createContext, useState } from 'react';
import { Item } from '../../interfaces/products';

// interface AppContextInterface {
//   cart: Item[];
//   setCart: string;
//   removeFromCart: string;
//   addToCart: string;
// }

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem('cart')) || []
  );

  const addToCart = (item: Item) => {
    setCart([...cart, item]);
    localStorage.setItem('cart-wine-la', JSON.stringify(cart));
  };

  const removeFromCart = product => {
    const newCartList = cart.filter(item => item !== product);
    setCart(newCartList);
    localStorage.setItem('cart-wine-la', JSON.stringify(newCartList));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, removeFromCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
