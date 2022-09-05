import { useContext } from 'react';
import { CartContext } from '../../providers/cart';

const Winebox = () => {
  const { cart } = useContext(CartContext);

  const cartQuantity = cart.reduce((acc, { quantity }) => acc + quantity, 0);

  return (
    <p>
      <span>
        Winebox(
        {cart.length > 0 ? cartQuantity : '0'})
      </span>
    </p>
  );
};

export default Winebox;
