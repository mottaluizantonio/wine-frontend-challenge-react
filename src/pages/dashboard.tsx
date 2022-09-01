import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Link from 'next/link';

import Search from '../assets/search.svg';
import { Container } from '../styles/pages/Home';

interface Item {
  id: number;
  image: string;
  name: string;
  price: number;
  discount: number;
  priceMember: number;
  priceNonMember: number;
  type: string;
  classification: string;
  size: string;
  rating: number;
  avaliations: number;
  country: string;
  region: string;
  flag: string;
  sommelierComment: string;
}

// interface Data {
//   page: number;
//   totalPages: number;
//   itemsPerPage: number;
//   totalItems: number;
//   items: Item[];
// }

const Dashboard: NextPage = () => {
  const [products, setProducts] = useState<Item[]>([]);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    fetch('https://wine-back-test.herokuapp.com/products?page=1&limit=10').then(
      res =>
        res.json().then(data => {
          setProducts(data.items);
          setTotalProducts(data.totalItems);
        })
    );
  }, []);

  return (
    <Container>
      <Head>
        <title>Wine</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <h1>Dashboard</h1>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              {product.id} -
              <Link href={`/product/${product.id}`}>{product.name}</Link>
            </li>
          ))}
          Total de produtos: {totalProducts}
        </ul>
        <Search />
      </main>
    </Container>
  );
};

export default Dashboard;
