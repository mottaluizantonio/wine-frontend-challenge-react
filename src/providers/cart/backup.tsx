import { createContext, useEffect, useState } from 'react';
import { Item } from '../../interfaces/products';

interface CartContextInterface {
  cart: Item[] | [];
  removeFromCart(product: Item): void;
  addToCart(product: Item): void;
}

export const CartContext = createContext<CartContextInterface>(
  {} as CartContextInterface
);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState<Item[]>([] as Item[]);

  useEffect(() => {
    const data = localStorage.getItem('cartwinelam');

    if (data) setCart(JSON.parse(data));
  }, []);

  const addToCart = product => {
    setCart([...cart, product]);
    localStorage.setItem('cartwinelam', JSON.stringify(cart));
  };

  const removeFromCart = product => {
    const newCartList = cart.filter(item => item !== product);
    setCart(newCartList);
    localStorage.setItem('cartwinelam', JSON.stringify(newCartList));
  };

  return (
    <CartContext.Provider value={{ cart, removeFromCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
