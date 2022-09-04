import { createContext, useEffect, useState } from 'react';
import { Item, ItemCart } from '../../interfaces/products';

interface CartContextInterface {
  cart: ItemCart[];
  addToCart(product: Item, productQuantity: number): void;
  removeFromCart(product: Item, remove: boolean): void;
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

  useEffect(() => {
    localStorage.setItem('cartwinelam', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, productQuantity) => {
    const productExist = cart.find(({ id }) => id === product.id);

    if (!productExist) {
      setCart([...cart, { ...product, quantity: productQuantity }]);
    } else {
      const updatedProductList = cart.map(item => {
        if (item.id === productExist.id)
          return { ...item, quantity: item.quantity + productQuantity };
        return item;
      });
      setCart(updatedProductList);
    }
  };

  const removeFromCart = (product, remove) => {
    if (remove || product.quantity === 1) {
      const newCartList = cart.filter(({ id }) => id !== product.id);
      setCart(newCartList);
    } else {
      const updatedProductList = cart.map(item => {
        if (item.id === product.id)
          return { ...item, quantity: item.quantity - 1 };
        return item;
      });
      setCart(updatedProductList);
    }
  };

  return (
    <CartContext.Provider value={{ cart, removeFromCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
