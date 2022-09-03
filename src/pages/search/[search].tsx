import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Item } from '../../interfaces/products';

const Search: NextPage = () => {
  const router = useRouter();
  const { search } = router.query;

  const [searchProducts, setSearchProducts] = useState<Item[]>([]);

  useEffect(() => {
    fetch(
      `https://wine-back-test.herokuapp.com/products?page=1&limit=10&name=${search}`
    ).then(res =>
      res.json().then(data => {
        setSearchProducts(data.items);
      })
    );
  }, []);

  return (
    <>
      <h1>Search</h1>
      <ul>
        {searchProducts.map(item => (
          <li key={item.id}>
            {item.id} - <Link href={`/product/${item.name}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Search;
