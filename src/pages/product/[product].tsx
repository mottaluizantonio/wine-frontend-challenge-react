import {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType
} from 'next';
import { useRouter } from 'next/router';

import Head from 'next/head';
import Header from '../../components/header/Header';

import Return from '../../assets/return.svg';

import {
  Container,
  ContainerReturn,
  Content,
  ContentLeft,
  DivClickReturn
} from '../../styles/components/product/Product';
import { Data, Item } from '../../interfaces/products';
import ProductFooterMobile from '../../components/product/ProductFooterMobile';
import PoductContentRight from '../../components/product/PoductContentRight';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetch(`https://wine-back-test.herokuapp.com/products?`);
  const data: Data = await res.json();
  const findProduct: Item = data.items.find(
    product => product.id === +params.product
  );

  return {
    props: {
      findProduct
    }
  };
};

const Product: NextPage = ({
  findProduct
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{findProduct.name} - Wine | Wine</title>
        <meta name="description" content="Wine product details" />
      </Head>

      <Header />
      <main>
        <Container>
          <ContainerReturn>
            <DivClickReturn onClick={() => router.back()}>
              <Return />
              <span>Voltar</span>
            </DivClickReturn>
          </ContainerReturn>
          <Content>
            <ContentLeft>
              <img src={findProduct.image} alt={findProduct.name} />
            </ContentLeft>
            <PoductContentRight findProduct={findProduct} />
          </Content>
          <ProductFooterMobile findProduct={findProduct} />
        </Container>
      </main>
    </div>
  );
};

export default Product;
