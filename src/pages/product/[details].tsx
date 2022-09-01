import {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType
} from 'next';
import Head from 'next/head';

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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetch(
    `https://wine-back-test.herokuapp.com/products?name=${params.details}`
  );
  const data: Data = await res.json();

  return {
    props: {
      data
    }
  };
};

const Details: NextPage = ({
  data
}: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <div>
    <Head>
      <title>Details</title>
      <meta name="description" content="Generated by create next app" />
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>

    <main>
      <h1>Details</h1>
      <ul>
        {data.items.map(product => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </main>
  </div>
);

export default Details;
