import { createContext, useEffect, useState } from 'react';
import { Item, ItemCart } from '../../interfaces/products';

interface CartContextInterface {
  cart: ItemCart[] | [];
  removeFromCart(product: Item): void;
  addToCart(product: Item): void;
}

export const CartContext = createContext<CartContextInterface>(
  {} as CartContextInterface
);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState<ItemCart[]>([] as ItemCart[]);

  useEffect(() => {
    const data = localStorage.getItem('cartwinelam');

    if (data) setCart(JSON.parse(data));
  }, []);

  const addToCart = product => {
    const productExist = cart.find(({ id }) => id === product.id);

    if (!productExist) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      const updatedProductList = cart.map(item => {
        if (item.id === productExist.id)
          return { ...item, quantity: item.quantity + 1 };
        return item;
      });
      setCart(updatedProductList);
    }
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
