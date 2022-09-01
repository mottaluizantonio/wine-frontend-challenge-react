import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

// import { getServerSideProps } from '..';
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

const Product: NextPage = () => {
  const router = useRouter();
  const { product } = router.query;

  const [products, setProducts] = useState<Item[]>([]);

  useEffect(() => {
    fetch(`https://wine-back-test.herokuapp.com/products?name=${product}`).then(
      res =>
        res.json().then(data => {
          setProducts(data.items);
        })
    );
  }, []);

  return (
    <ul>
      {products.map(item => (
        <li key={item.id}>
          {item.id} - <Link href={`/product/${item.name}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Product;
