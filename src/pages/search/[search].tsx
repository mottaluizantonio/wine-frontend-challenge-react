import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

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

const Search: NextPage = () => {
  const router = useRouter();
  const { search } = router.query;

  const [searchProducts, setSearchProducts] = useState<Item[]>([]);

  useEffect(() => {
    fetch(`https://wine-back-test.herokuapp.com/products?name=${search}`).then(
      res =>
        res.json().then(data => {
          setSearchProducts(data.items);
        })
    );
  }, []);

  return (
    <ul>
      {searchProducts.map(item => (
        <li key={item.id}>
          {item.id} - <Link href={`/product/${item.name}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Search;
