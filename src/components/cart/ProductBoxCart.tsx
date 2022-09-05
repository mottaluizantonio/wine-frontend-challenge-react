import Link from 'next/link';
import { useContext } from 'react';

import { CartContext } from '../../providers/cart';
import { ProductBox } from '../../styles/components/ProductBoxCart';
import PricePartnerCart from './PricePartnerCart';

const ProductBoxCart = ({ productID }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const product = cart.find(item => item.id === productID);

  return (
    <div key={product.id}>
      <ProductBox>
        <Link href={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} />
        </Link>

        <div className="product-left">
          <Link href={`/product/${product.id}`}>
            <h2>{product.name}</h2>
          </Link>
          <div className="product-quantity">
            <button
              type="button"
              onClick={() => removeFromCart(product, false)}
            >
              -
            </button>
            {product.quantity}
            <button type="button" onClick={() => addToCart(product, 1)}>
              +
            </button>
          </div>
        </div>

        <div className="product-right">
          <button
            type="button"
            className="button-x"
            onClick={() => removeFromCart(product, true)}
          >
            x
          </button>
          <PricePartnerCart productID={product.id} />
        </div>
      </ProductBox>
    </div>
  );
};

export default ProductBoxCart;
