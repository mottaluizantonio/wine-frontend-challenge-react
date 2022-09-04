import { useContext } from 'react';
import Link from 'next/link';

import { CartContext } from '../providers/cart';
import { PricePartner, ProductBox, ProductsGrid } from '../styles/pages/Cart';

const Cart2 = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <>
      <ProductsGrid>
        <p>
          <span>
            Winebox(
            {cart.length > 0
              ? cart.reduce((acc, { quantity }) => acc + quantity, 0)
              : '0'}
            )
          </span>
        </p>
        <p>
          Total: R${' '}
          {cart
            .reduce(
              (total, { priceNonMember, quantity }) =>
                total + priceNonMember * quantity,
              0
            )
            .toFixed(2)}
        </p>
        <p>
          Torne-se membro e economize R${' '}
          {(
            cart.reduce(
              (total, { priceNonMember, quantity }) =>
                total + priceNonMember * quantity,
              0
            ) -
            cart.reduce(
              (total, { priceMember, quantity }) =>
                total + priceMember * quantity,
              0
            )
          ).toFixed(2)}
        </p>
        {cart.map(product => (
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
                <PricePartner>
                  <p>
                    R$
                    <span>
                      {
                        (product.priceNonMember * product.quantity)
                          .toString()
                          .split('.')[0]
                      }
                    </span>
                    ,
                    {
                      (product.priceNonMember * product.quantity)
                        .toFixed(2)
                        .toString()
                        .split('.')[1]
                    }
                  </p>
                </PricePartner>
              </div>
            </ProductBox>
          </div>
        ))}
      </ProductsGrid>
    </>
  );
};

export default Cart2;
