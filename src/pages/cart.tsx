import { NextPage } from 'next';
import Head from 'next/head';

import Header from '../components/header/Header';
import Container from '../styles/components/cart/Cart';
import ProductsGridCart from '../components/cart/ProductsGridCart';
import FooterCart from '../components/cart/FooterCart';

const Cart: NextPage = () => (
  <div>
    <Head>
      <title>Wine | Carrinho de compras</title>
      <meta name="description" content="Wine - cart of products" />
    </Head>

    <Header />
    <main>
      <Container>
        <ProductsGridCart />
        <FooterCart />
      </Container>
    </main>
  </div>
);

export default Cart;
