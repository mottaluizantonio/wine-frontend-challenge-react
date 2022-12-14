import {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType
} from 'next';
import Head from 'next/head';

import Header from '../../components/header/Header';
import NavigationContainer from '../../components/page/NavigationContainer';
import ProductsFound from '../../components/page/ProductsFound';
import FilterPrice from '../../components/page/FilterPrice';
import { Data } from '../../interfaces/products';

import ProductGrid from '../../components/page/ProductGrid';
import {
  Container,
  Content,
  MainContent
} from '../../styles/components/page/Page';

export const getServerSideProps: GetServerSideProps = async ({
  params,
  query
}) => {
  const res = await fetch(
    `https://wine-back-test.herokuapp.com/products?page=${
      params.page
    }&limit=9&filter=${query.price}&name=${query.name ? query.name : ''}`
  );
  const data: Data = await res.json();

  return {
    props: {
      data,
      query
    }
  };
};

const Page: NextPage = ({
  data,
  query
}: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <div>
    <Head>
      <title>Wine | Compre vinhos online com descontos exclusivos!</title>
      <meta name="description" content="Wine page of wines" />
    </Head>

    <Header />
    <main>
      <Container>
        <Content>
          <FilterPrice query={query} />
          <MainContent>
            <ProductsFound data={data} query={query} />
            <ProductGrid data={data} />
            <NavigationContainer data={data} query={query} />
          </MainContent>
        </Content>
      </Container>
    </main>
  </div>
);

export default Page;
