import { useContext } from 'react';

import { CartContext } from '../../providers/cart';
import { Container } from '../../styles/components/ProductsGridCart';
import EmptyCart from './EmptyCart';
import ProductBoxCart from './ProductBoxCart';
import Winebox from './Winebox';

const ProductsGridCart = () => {
  const { cart } = useContext(CartContext);

  return (
    <Container>
      <Winebox />
      {cart.length === 0 && <EmptyCart />}
      {cart.map(product => (
        <ProductBoxCart productID={product.id} />
      ))}
    </Container>
  );
};

export default ProductsGridCart;
