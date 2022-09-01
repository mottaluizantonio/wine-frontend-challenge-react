import { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem('cart')) || []
  );

  const addToCart = item => {
    setCart([...cart, item]);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const removeFromCart = product => {
    const newCartList = cart.filter(item => item !== product);
    setCart(newCartList);
    localStorage.setItem('cart', JSON.stringify(newCartList));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, removeFromCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
