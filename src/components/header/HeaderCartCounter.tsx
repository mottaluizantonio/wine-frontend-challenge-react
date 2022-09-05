import { useContext } from 'react';
import { CartContext } from '../../providers/cart';

const HeaderCartCounter = () => {
  const { cart } = useContext(CartContext);

  return (
    <span>
      {cart.length > 0
        ? cart.reduce((acc, { quantity }) => acc + quantity, 0)
        : '0'}
    </span>
  );
};

export default HeaderCartCounter;
