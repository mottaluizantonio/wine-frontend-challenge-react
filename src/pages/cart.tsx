import { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';
import Link from 'next/link';

import Header from '../components/Header';
import { CartContext } from '../providers/cart';
import {
  Container,
  PricePartner,
  ProductBox,
  ProductsGrid
} from '../styles/pages/Cart';

// interface ReduceProps {
//   acc: number;
//   quantity: number;
// }

const Page: NextPage = () => {
  const { cart, addToCart } = useContext(CartContext);

  return (
    <div>
      <Head>
        <title>Wine | Compre vinhos online com descontos exclusivos!</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Header />
      <main>
        <Container>
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
                      <button type="button">-</button>
                      {product.quantity}
                      <button type="button" onClick={() => addToCart(product)}>
                        +
                      </button>
                    </div>
                  </div>

                  <div className="product-right">
                    <button
                      type="button"
                      className="button-x"
                      onClick={() => addToCart(product)}
                    >
                      x
                    </button>
                    <PricePartner>
                      <p>
                        R$
                        <span>
                          {product.priceNonMember.toString().split('.')[0]}
                        </span>
                        ,
                        {
                          product.priceNonMember
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
        </Container>
      </main>
    </div>
  );
};

export default Page;
