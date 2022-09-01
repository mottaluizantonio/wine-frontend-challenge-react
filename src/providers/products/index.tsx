import { createContext, useState } from 'react';
import { GetServerSideProps } from 'next';

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

interface Data {
  page: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
  items: Item[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    'https://wine-back-test.herokuapp.com/products?page=1&limit=10'
  );
  const data: Data = await res.json();

  return {
    props: {
      data
    }
  };
};

export const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState<Data[]>([]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
