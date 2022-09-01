import { GetServerSideProps } from 'next';

// interface Item {
//   id: number;
//   image: string;
//   name: string;
//   price: number;
//   discount: number;
//   priceMember: number;
//   priceNonMember: number;
//   type: string;
//   classification: string;
//   size: string;
//   rating: number;
//   avaliations: number;
//   country: string;
//   region: string;
//   flag: string;
//   sommelierComment: string;
// }

const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    'https://wine-back-test.herokuapp.com/products?page=1&limit=10'
  );
  const products = await res.json();

  return {
    props: {
      products
    }
  };
};

export default getServerSideProps;
